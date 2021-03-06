// Copyright 2015 The Vanadium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

var test = require('tape');
var types = require('../../src/vdl/types');
var kind = require('../../src/vdl/kind');
var vdlSecurity = require('../vdl-out/v.io/v23/security');
var caveats = require('../../src/security/caveats');
var vom = require('../../src/vom');

test('createCaveat with any-type param', function(t) {
  var desc = {
    id: new Uint8Array([0x99, 0x99, 0x99, 0x99, 0x99, 0x99, 0x99, 0x99,
      0x99, 0x99, 0x99, 0x99, 0x99, 0x99, 0x99, 0x99]),
    paramType: types.ANY,
  };
  var cav = caveats.createCaveat(desc, 9);
  t.deepEqual(cav.id, desc.id, 'Correct id');
  vom.decode(cav.paramVom).then(function(res) {
    t.deepEqual(res, {val: 9}, 'Correct data');
    t.equal(cav._type, (new vdlSecurity.Caveat())._type, 'Correct type');
    t.end();
  }).catch(t.end);
});

test('createCaveat with incompatible param', function(t) {
  var desc = {
    id: new Uint8Array([0x99, 0x99, 0x99, 0x99, 0x99, 0x99, 0x99, 0x99,
      0x99, 0x99, 0x99, 0x99, 0x99, 0x99, 0x99, 0x99]),
    paramType: types.INT32,
  };
  t.throws(function() {
    caveats.createCaveat(desc, 'AString');
  }, null, 'Should throw when param is incompatible');
  t.end();
});

test('createCaveat with type coversion', function(t) {
  var desc = {
    id: new Uint8Array([0x99, 0x99, 0x99, 0x99, 0x99, 0x99, 0x99, 0x99,
      0x99, 0x99, 0x99, 0x99, 0x99, 0x99, 0x99, 0x99]),
    paramType: {
      kind: kind.INT32,
      name: 'NamedInt'
    },
  };
  var cav = caveats.createCaveat(desc, 9);
  t.deepEqual(cav.id, desc.id, 'Correct id');
  vom.decode(cav.paramVom).then(function(res) {
    t.deepEqual(res, {val: 9}, 'Correct data');
    t.deepEqual(res._type, desc.paramType, 'Correct data type');
    t.equal(cav._type, (new vdlSecurity.Caveat())._type, 'Correct type');
    t.end();
  }).catch(t.end);
});

test('createConstCaveat', function(t) {
  var trueCav = caveats.createConstCaveat(false);
  t.deepEqual(trueCav.id, vdlSecurity.ConstCaveat.id, 'Correct id');
  vom.decode(trueCav.paramVom).then(function(res) {
    t.deepEqual(res, {val: false}, 'Correct data');
    t.equal(trueCav._type, (new vdlSecurity.Caveat())._type, 'Correct type');
    t.end();
  }).catch(t.end);
});

test('createUnconstrainedUseCaveat', function(t) {
  var unCon = caveats.unconstrainedUse;
  t.deepEqual(unCon.id, vdlSecurity.ConstCaveat.id, 'Correct id');
  vom.decode(unCon.paramVom).then(function(res) {
    t.deepEqual(res, {val: true}, 'Correct data');
    t.equal(unCon._type, (new vdlSecurity.Caveat())._type, 'Correct type');
    t.end();
  }).catch(t.end);
});

test('createExpiryCaveat w/ date', function(t) {
  var date = new Date(1920, 3, 4, 9, 10);
  var expiryCav = caveats.createExpiryCaveat(date);
  t.deepEqual(expiryCav.id, vdlSecurity.ExpiryCaveat.id, 'Correct id');
  vom.decode(expiryCav.paramVom).then(function(res) {
    t.deepEqual(res, date, 'Correct data');
    t.equal(expiryCav._type, (new vdlSecurity.Caveat())._type, 'Correct type');
    t.end();
  }).catch(t.end);
});

test('createExpiryCaveat w/ millisecond representation', function(t) {
  var date = new Date(1920, 3, 4, 9, 10);
  t.throws(function() {
    caveats.createExpiryCaveat(date.getTime());
  }, null, 'Should not be able to pass milliseconds in as a date');
  t.end();
});

test('createMethodCaveat', function(t) {
  var methodList = ['A', 'B', 'C'];
  var methodCav = caveats.createMethodCaveat(methodList);
  t.deepEqual(methodCav.id, vdlSecurity.MethodCaveat.id, 'Correct id');
  vom.decode(methodCav.paramVom).then(function(res) {
    t.deepEqual(res, {val: methodList}, 'Correct data');
    t.equal(methodCav._type, (new vdlSecurity.Caveat())._type, 'Correct type');
    t.end();
  }).catch(t.end);
});
