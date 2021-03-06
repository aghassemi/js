// Copyright 2015 The Vanadium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

/**
 * @fileoverview Tests for the uniqueid library.
 */

var test = require('tape');
var uniqueid = require('../../src/lib/uniqueid');
var vdl = require('../../src/gen-vdl/v.io/v23/uniqueid');
var typeutil = require('../../src/vdl/type-util');

test('Test random', function(assert) {
  var id = uniqueid.random();

  assert.ok(id instanceof vdl.Id);
  assert.end();
});

test('Test hex string conversion', function(assert) {
  var hex = '9876543210fedcba0123456789abcdef';
  var bytes = [
    152, 118, 84, 50, 16, 254, 220, 186, 1, 35, 69, 103, 137, 171, 205, 239];

  var id = uniqueid.fromHexString(hex);
  var unwrapped = typeutil.unwrap(id);
  for (var j = 0; j < 16; j++) {
    assert.equals(unwrapped[j], bytes[j]);
  }
  var derived = uniqueid.toHexString(id);
  assert.equals(derived, hex);

  assert.end();
});

