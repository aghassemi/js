// Copyright 2015 The Vanadium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

var test = require('prova');
var vanadium = require('../../');
var config = require('./default-config');
var leafDispatcher = require('../../src/rpc/leaf-dispatcher');
var Blessings = require('../../src/security/blessings');
var serve = require('./serve');
var security = vanadium.security;

function validateBlessings(t, blessings) {
  t.ok(blessings instanceof Blessings, 'Blessings have correct type');
  t.ok(blessings.chains.length > 0, 'Non-empty chains');
  t.ok(blessings.publicKey, 'Public key is set');
}

test('Test bless self without Caveat', function(t) {
  var rt;
  vanadium.init(config, function(err, runtime) {
    if (err) {
      t.end(err);
    }

    rt = runtime;

    runtime.principal.blessSelf(runtime.getContext(), 'blessedname')
    .then(function(blessings) {
      validateBlessings(t, blessings);
      rt.close(t.end);
    }).catch(function(err) {
      t.error(err);
      rt.close(t.end);
    });
  });
});

test('Test bless self with Caveat', function(t) {
  var rt;
  vanadium.init(config, function(err, runtime) {
    if (err) {
      t.end(err);
    }

    rt = runtime;

    runtime.principal.blessSelf(runtime.getContext(), 'blessedname',
      security.createExpiryCaveat(new Date()),
      function(err, blessings) {
      t.error(err);
      validateBlessings(t, blessings);
      rt.close(t.end);
    });
  });
});

test('Test bless without Caveat from server', function(t) {
  var service = {
    method: function(ctx, serverCall, cb) {
      var secCall = serverCall.securityCall;
      var rt = vanadium.runtimeForContext(ctx);
      var remoteKey = secCall.remoteBlessings.publicKey;
      rt.principal.bless(ctx, remoteKey, secCall.localBlessings,
       'ext', function(err) {
         t.ok(err, 'Expected at least one caveat must be specified error');
         cb(null, null);
       });
    }
  };

  serve('testing/blessnocav', leafDispatcher(service),
    function(err, res) {
      if (err) {
        res.end(t, err);
        return;
      }

      res.service.method(res.runtime.getContext(), function(err) {
        t.error(err);
        res.end(t);
      });
  });
});

test('Test bless with Caveat from server', function(t) {
  var service = {
    method: function(ctx, serverCall, cb) {
      var rt = vanadium.runtimeForContext(ctx);
      var secCall = serverCall.securityCall;
      var remoteKey = secCall.remoteBlessings.publicKey;
      rt.principal.bless(ctx, remoteKey, secCall.localBlessings,
       'ext', security.createExpiryCaveat(new Date(Date.now() - 1000)),
       security.createConstCaveat(true), function(err, blessings) {
         t.notOk(err, 'No error expected during bless');
         validateBlessings(t, blessings);
         cb(null, null);
       });
    }
  };

  serve('testing/blesscav', leafDispatcher(service),
    function(err, res) {
      if (err) {
        res.end(t, err);
        return;
      }

      res.service.method(res.runtime.getContext(), function(err) {
        t.error(err);
        res.end(t);
      });
  });
});

test('Test bless without Caveat from client (with Granter)', function(t) {
  var expectedBlessing;

  var service = {
    method: function(ctx, serverCall) {
      t.ok(serverCall.grantedBlessings, 'Expect to get granted blessing');
      t.deepEqual(serverCall.grantedBlessings, expectedBlessing,
        'Expect to get blessing that was granted.');
      return 'aResponse';
    }
  };


  serve('testing/clientblessgranter', leafDispatcher(service),
    function(err, res) {
      if (err) {
        t.end(err);
        return;
      }

      var client = res.runtime.newClient();
      var fiveSecondsInFuture = new Date(Date.now() + 5000);
      var granterCalled = false;
      var granterOption = client.callOption({
        granter: function(ctx, call, cb) {
          granterCalled = true;
          res.runtime.principal.bless(res.runtime.getContext(),
            call.remoteBlessings.publicKey,
            call.localBlessings,
            'ext',
            security.createExpiryCaveat(fiveSecondsInFuture),
            function(err, blessing) {
              expectedBlessing = blessing;
              cb(err, blessing);
            });
        }
      });

      res.service.method(res.runtime.getContext(), granterOption, function(err){
        t.ok(granterCalled, 'Granter should be called');
        t.error(err);
        res.runtime.close(t.end);
      });
    });
});

// TODO(bprosnitz) This test is weak. Improve it.
test('Test add roots', function(t) {
  var rt;
  vanadium.init(config, function(err, runtime) {
    if (err) {
      t.end(err);
    }

    rt = runtime;

    runtime.principal.blessSelf(runtime.getContext(), 'blessedname')
    .then(function(blessings) {
      validateBlessings(t, blessings);

      return runtime.principal.addToRoots(runtime.getContext(), blessings);
    }).then(function() {
      rt.close(t.end);
    }).catch(function(err) {
      t.error(err, 'either blessSelf or addToRoots errored ' + err);
      rt.close(t.end);
    });
  });
});

test('Test fetching blessing debug string', function(t) {
  var rt;
  vanadium.init(config, function(err, runtime) {
    if (err) {
      t.end(err);
    }

    rt = runtime;

    runtime.principal.blessSelf(runtime.getContext(), 'blessedname')
    .then(function(blessings) {
      t.ok(blessings.chains[0][0].extension === 'blessedname',
        'Blessing had correct extension');
      rt.close(t.end);
    }).catch(function(err) {
      t.error(err);
      rt.close(t.end);
    });
  });
});
