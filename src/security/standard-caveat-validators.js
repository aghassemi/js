// Copyright 2015 The Vanadium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

var vdlSecurity = require('../gen-vdl/v.io/v23/security');

// Register the default caveats from the security package.
module.exports = {
  registerDefaultCaveats: registerDefaultCaveats
};

function registerDefaultCaveats(registry) {
  registry.register(vdlSecurity.ConstCaveat,
    constCaveatValidator);
  registry.register(vdlSecurity.ExpiryCaveat,
    expiryCaveatValidator);
  registry.register(vdlSecurity.MethodCaveat,
    methodCaveatValidator);
}


function constCaveatValidator(ctx, call, value, cb) {
  if (!value) {
    return cb(new vdlSecurity.ConstCaveatValidationError(ctx));
  }
  cb();
}

function expiryCaveatValidator(ctx, call, expiry, cb) {
  var now = new Date();
  if (now.getTime() > expiry.getTime()) {
    return cb(new vdlSecurity.ExpiryCaveatValidationError(ctx,
      now, expiry));
  }
  cb();
}

function methodCaveatValidator(ctx, call, methods, cb) {
  if (!call.method || methods.length === 0) {
    return cb();
  }
  for (var i = 0; i < methods.length; i++) {
    if (call.method === methods[i]) {
      return cb();
    }
  }
  return cb(new vdlSecurity.MethodCaveatValidationError(call.context,
    call.method, methods));
}
