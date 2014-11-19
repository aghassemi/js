var test = require('prova');
var veyron = require('../../');
var config = {
  wspr: 'http://' + process.env.WSPR_ADDR
};

test('runtime.bindTo(name, callback)', function(assert) {
  var rt;

  veyron.init(config, oninit);

  function oninit(err, runtime) {
    assert.error(err);

    rt = runtime;
    runtime.bindTo('test_service/cache', onbind);
  }

  function onbind(err, service) {
    assert.error(err);
    assert.ok(service);

    rt.close(assert.end);
  }
});

test('var promise = runtime.bindTo(name)', function(assert) {
  veyron
  .init(config)
  .then(bindTo)
  .catch(assert.end);

  function bindTo(runtime) {
    return runtime
    .bindTo('test_service/cache')
    .then(function(service) {
      assert.ok(service);
      runtime.close(assert.end);
    });
  }
});

test('runtime.bindTo(badName, callback) - failure', function(assert) {
  veyron.init(config, function(err, runtime) {
    assert.error(err);

    runtime.bindTo('does-not/exist', function(err, service) {
      assert.ok(err instanceof Error);
      assert.deepEqual(err.idAction, veyron.errors.IdActions.NoExist);
      runtime.close(assert.end);
    });
  });
});

test('var promise = runtime.bindTo(badName) - failure', function(assert) {
  var rt;

  veyron
  .init(config)
  .then(function(runtime) {
    rt = runtime;
    return runtime.bindTo('does-not/exist');
  })
  .then(function(service) {
    assert.fail('should not succeed');
    rt.close(assert.end);
  }, function(err) {
    assert.ok(err instanceof Error);
    assert.deepEqual(err.idAction, veyron.errors.IdActions.NoExist);
    rt.close(assert.end);
  })
  .catch(function(err) {
    assert.error(err);
    rt.close(assert.end);
  });
});

test('runtime.bindTo(name, [callback]) - bad wspr url', function(assert) {
  veyron.init({ wspr: 'http://bad-address.tld' }, onruntime);

  function onruntime(err, runtime) {
    assert.error(err);
    runtime.bindTo('test_service/cache', onservice);
  }

  function onservice(err, service) {
    assert.ok(err instanceof Error);
    assert.end();
  }
});

test('var promise = runtime.bindTo(name) - bad wspr url', function(assert) {
  veyron
  .init({ wspr: 'http://bad-address.tld' })
  .then(bindTo)
  .catch(assert.end);

  function bindTo(runtime) {
    return runtime
    .bindTo('test_service/cache')
    .then(noop, function(err) {
      assert.ok(err instanceof Error);
      assert.end();
    })
    .catch(assert.end);
  }
});

function noop() {}
