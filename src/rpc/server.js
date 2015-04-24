// Copyright 2015 The Vanadium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

/**
 *  @fileoverview Server allows creation of services that can be invoked
 *  remotely via RPCs.
 *
 *  Usage:
 *  var videoService = {
 *    play: {
 *      // Play video
 *    }
 *  };
 *
 *  var s = new server(proxyConnection);
 *  s.serve('mymedia/video', videoService);
 *  @private
 */

var Deferred = require('./../lib/deferred');
var Promise = require('./../lib/promise');
var asyncCall = require('../lib/async-call');
var InspectableFunction = require('../lib/inspectable-function');
var leafDispatcher = require('./leaf-dispatcher');
var vlog = require('./../lib/vlog');
var inspector = require('./../lib/arg-inspector');
var Invoker = require('./../invocation/invoker');
var defaultAuthorizer = require('../security/default-authorizer');
var actions = require('./../verror/actions');
var makeError = require('../verror/make-errors');

var nextServerID = 1; // The ID for the next server.

/**
 * @summary
 * Server defines the interface for managing a collection of services.
 * @description
 * <p>Private Constructor, use
 * [Runtime#newServer]{@link module:vanadium~Runtime#newServer}.</p>
 * @inner
 * @constructor
 * @memberof module:vanadium.rpc
 */
function Server(router) {
  if (!(this instanceof Server)) {
    return new Server(router);
  }

  this._router = router;
  this._rootCtx = router._rootCtx;
  this._handle = 0;
  this.id = nextServerID++;
  this.dispatcher = null;
  this.serviceObjectHandles = {};
}

/**
 * ServeOptions is a set of options that are passed to the
 * [serve]{@link module:vanadium.rpc~Server#serve}.
 * @typedef module:vanadium.rpc~Server~ServeOptions
 * @property {module:vanadium.security.Authorize} authorizer An Authorizer
 * that will handle the authorization for the method call.  If null, then the
 * default strict authorizer will be used.
 */

/**
 * <p>Serve associates object with name by publishing the address
 * of this server with the mount table under the supplied name and using
 * authorizer to authorize access to it.</p>
 *
 * <p>To serve names of the form "mymedia/*" make the calls:</p>
 * <pre>
 * serve("mymedia", serviceObject, { // optional authorizer
 *   authorizer: serviceAuthorizer
 * });
 * </pre>
 * <p>If name is an empty string, no attempt will made to publish that
 * name to a mount table. It is an error to call
 * {@link module:vanadium.rpc~Server#serve|serve}
 * if either {@link module:vanadium.rpc~Server#serveDispatcher|serveDispatcher}
 * or {@link module:vanadium.rpc~Server.serve|serve} has already been called.
 * To serve the same object under multiple names,
 * {@link module:vanadium.rpc~Server#addName|addName} can be used.</p>
 *
 * @public
 * @param {string} name Name to serve under.
 * @param {object} serviceObject The service object that has a set of
 * exported methods.
 * @param {module:vanadium.rpc~Server~ServeOptions} options Options config.
 * @param {module:vanadium~voidCb} [cb] If provided, the function
 * will be called on completion.
 * @return {Promise<void>} Promise to be called when serve completes or fails.
 */
Server.prototype.serve = function(name, serviceObject, options, cb) {
  if (typeof options === 'function') {
    cb = options;
    options = undefined;
  }

  var authorizer;

  if (options) {
    authorizer = options.authorizer;
  }

  var dispatcher = leafDispatcher(serviceObject, authorizer);

  return this.serveDispatcher(name, dispatcher, cb);
};

/**
 * @typedef module:vanadium.rpc~Server~DispatcherResponse
 * @type {object}
 * @property {object} service The Invoker that will handle
 * method call.
 * @property {module:vanadium.security.Authorize} authorizer An Authorizer that
 * will handle the authorization for the method call.  If null, then the default
 * authorizer will be used.
 */

/**
 * A function that returns the service object for a suffix/method pair.
 * @callback module:vanadium.rpc~Server~Dispatcher
 * @param {string} suffix The suffix for the call.
 * @param {string} method The method for the call.
 * @param {module:vanadium.rpc~Server~Dispatcher-callback} cb
 * The callback to call when the dispatch is complete.
 * @return {module:vanadium.rpc~Server~DispatcherResponse | Promise}
 * Either the DispatcherResponse object to
 * handle the method call or a Promise that will be resolved the service
 * callback.
 */

/**
 * Callback passed into Dispatcher.
 * @callback module:vanadium.rpc~Server~Dispatcher-callback
 * @param {Error} err An error if one occurred.
 * @param {object} object The object that will handle the method call.
 */

/**
 * <p>ServeDispatcher associates dispatcher with the portion of the mount
 * table's name space for which name is a prefix, by publishing the
 * address of this dispatcher with the mount table under the supplied name.
 * RPCs invoked on the supplied name will be delivered to the supplied
 * Dispatcher's lookup method which will in turn return the object. </p>
 *
 * <p>To serve names of the form "mymedia/*" make the calls: </p>
 *
 * <pre>
 * serve("mymedia", dispatcher);
 * </pre>
 *
 * <p>If name is an empty string, no attempt will made to publish that
 * name to a mount table. </p>
 *
 * <p>It is an error to call
 * {@link module:vanadium.rpc~Server#serveDispatcher|serveDispatcher}
 * if {@link module:vanadium.rpc~Server#serve|serve} has already been called.
 * It is also an error
 * to call serveDispatcher multiple times.</p>
 * To serve the same dispatcher under multiple names,
 * {@link module:vanadium.rpc~Server#addName|addName} can be used. </p>
 *
 * @public
 * @param {string} name Name to serve under.
 * @param {module:vanadium.rpc~Server~Dispatcher} dispatcher A function that
 * will take in the suffix and the method to be called and return the service
 * object for that suffix.
 * @param {module:vanadium~voidCb} [cb] If provided, the function
 * will be called on completion.
 * @return {Promise<void>} Promise to be called when serve completes or fails.
 */
Server.prototype.serveDispatcher = function(name, dispatcher, cb) {
  this.dispatcher = dispatcher;
  return this._router.serve(name, this, cb);
};

/**
 * Stop gracefully stops all services on this Server.
 * New calls are rejected, but any in-flight calls are allowed to complete.
 * All published named are unmounted.
 * @param {module:vanadium~voidCb} [cb] If provided, the function
 * will be called on completion.
 * @return {Promise<void>} Promise to be called when stop service completes or
 * fails
 */
Server.prototype.stop = function(cb) {
  return this._router.stopServer(this, cb);
};

/**
 * Adds the specified name to the mount table for the object or dispatcher
 * served by this server. It is an error to specify a name that was not
 * previously added using
 * [serve]{@link module:vanadium.rpc~Server#serve}/
 * [serveDispatcher]{@link module:vanadium.rpc~Server#serveDispatcher}
 * or [addName]{@link module:vanadium.rpc~Server#addName}.
 * @public
 * @param {string} name Name to publish.
 * @param {module:vanadium~voidCb} [cb] If provided, the function
 * will be called on completion.
 * @return {Promise<void>} Promise to be called when operation completes or
 * fails
 */
Server.prototype.addName = function(name, cb) {
  return this._router.addName(name, this, cb);
};

/**
 * Removes the specified name from the mount table. It is an
 * error to specify a name that was not previously added using
 * [serve]{@link module:vanadium.rpc~Server#serve}/
 * [serveDispatcher]{@link module:vanadium.rpc~Server#serveDispatcher}
 * or [addName]{@link module:vanadium.rpc~Server#addName}.
 * @public
 * @param {string} name Name to remove.
 * @param {function} [cb] If provided, the function will be called on
 * completion. The only argument is an error if there was one.
 * @return {Promise<void>} Promise to be called when operation completes or
 * fails.
 */
Server.prototype.removeName = function(name, cb) {
  return this._router.removeName(name, this, cb);
};

/**
 * @private
 * @param {Number} handle The handle for the service.
 * @return {Object} The invoker corresponding to the provided error.
 */
Server.prototype.getInvokerForHandle = function(handle) {
  var result = this.serviceObjectHandles[handle];
  delete this.serviceObjectHandles[handle];

  return result.invoker;
};

/**
 * Handles the authorization for an RPC.
 * @private
 * @param {Number} handle The handle for the authorizer.
 * @param {module:vanadium.context.Context} ctx The ctx of the
 * call.
 * @param {module:vanadium.security~SecurityCall} call The security call.
 * @return {Promise} A promise that will be fulfilled with the result.
 */
Server.prototype.handleAuthorization = function(handle, ctx, call) {
  var handler = this.serviceObjectHandles[handle];
  var authorizer = defaultAuthorizer;
  if (handler && handler.authorizer) {
    authorizer = handler.authorizer;
  }

  var def = new Deferred();
  var inspectableAuthorizer = new InspectableFunction(authorizer);
  asyncCall(ctx, null, inspectableAuthorizer, 0, [ctx, call],
    function(err) {
    if (err) {
      def.reject(err);
      return;
    }
    def.resolve();
  });
  return def.promise;
};

var InvokeOnNonInvoker = makeError(
  'v.io/core/javascript.InvokeOnNonInvoker', actions.NO_RETRY,
  '{1:}{2:} trying to invoke on a non-invoker{:_}');
/**
 * Handles the result of lookup and returns an error if there was any.
 * @private
 */
Server.prototype._handleLookupResult = function(object) {
  if (!object.hasOwnProperty('service')) {
    // TODO(bjornick): Use the correct context here.
    throw new InvokeOnNonInvoker(this._rootCtx);
  }
  object._handle = this._handle;
  try {
    object.invoker = new Invoker(object.service);
  } catch(e) {
    vlog.logger.error('lookup failed', e);
    return e;
  }
  this.serviceObjectHandles[object._handle] = object;
  this._handle++;
  return null;
};



/*
 * Perform the lookup call to the user code on the suffix and method passed in.
 */
Server.prototype._handleLookup = function(suffix) {
  var self = this;
  var def = new Deferred();

  var argsNames = inspector(this.dispatcher).names;
  var useCallback = argsNames.length >= 2;
  var cb = function(err, val) {
    if (err) {
      def.reject(err);
    } else {
      def.resolve(val);
    }
  };

  var result;
  try {
    result = this.dispatcher(suffix, cb);
  } catch (e) {
    def.reject(e);
    vlog.logger.error(e);
    return def.promise;
  }

  if (!useCallback) {
    if (result === undefined) {
      return def.promise.then(handleResult);
    }

    if (result instanceof Error) {
      def.reject(result);
      return def.promise;
    }

    def.resolve(result);
  }

  function handleResult(v) {
    var err = self._handleLookupResult(v);
    if (err) {
     return Promise.reject(err);
    }
    return Promise.resolve(v);
  }

  return def.promise.then(handleResult);
};

/**
 * Export the module
 */
module.exports = Server;
