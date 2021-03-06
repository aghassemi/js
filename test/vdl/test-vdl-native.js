// Copyright 2015 The Vanadium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

var test = require('tape');
var time = require('../vdl-out/javascript-test/time');

test('time constants are Dates', function(assert) {
  var expectedTime = new Date(2012,11,15, 8,15,20, 453);
  assert.ok(time.D instanceof Date, 'constant should be a date');
  var diff = Math.abs(expectedTime - time.D);
  assert.ok(diff < 1, 'constant should be right date got' + time.D +
   ' expected ' + expectedTime + ' (diff was ' + diff + ')');
  assert.end();
});
