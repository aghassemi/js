/**
 * @fileoverview Forwards messages to and from a nacl module.
 * @private
 */

var extensionEventProxy = require('./event-proxy');
var Deferred = require('./../lib/deferred');
var Proxy = require('./proxy');
var random = require('../lib/random');
var vLog = require('./../lib/vlog');
var DecodeUtil = require('../lib/decode-util');

module.exports = ProxyConnection;

/**
 * A client for the veyron service using postMessage. Connects to the veyron
 * browspr and performs RPCs.
 * @constructor
 * @private
 */
function ProxyConnection() {
  var self = this;

  this.instanceId = random.hex();

  extensionEventProxy.on('browsprMsg', function(msg) {
    var body;
    try {
      body = DecodeUtil.decode(msg.body);
    } catch (e) {
      vLog.warn('Failed to parse ' + body);
      return;
    }

    if (msg.instanceId === self.instanceId) {
      self.process(body);
    }
  });

  // rethrow crash error when proxy fails.
  extensionEventProxy.on('crash', function(message) {
    var crashError = new Error(message);
    self.emit('crash', crashError);
  });

  var def = new Deferred();
  Proxy.call(this, def.promise);
  def.resolve(this);
}

ProxyConnection.prototype = Object.create(Proxy.prototype);

ProxyConnection.prototype.constructor = ProxyConnection;

ProxyConnection.prototype.send = function(msg) {
  var wrappedMsg = {
    instanceId: this.instanceId,
    msg: msg
  };
  extensionEventProxy.send('browsprMsg', wrappedMsg);
};

ProxyConnection.prototype.close = function(cb) {
  extensionEventProxy.send('browsprCleanup', {
    instanceId: this.instanceId
  });
  if (cb) {
    extensionEventProxy.once('browsprCleanupFinished', cb.bind(null, null));
  }
};
