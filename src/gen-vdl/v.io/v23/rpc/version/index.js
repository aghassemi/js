// Copyright 2015 The Vanadium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

// This file was auto-generated by the vanadium vdl tool.
var vdl = require('../../../../../vdl');
var makeError = require('../../../../../verror/make-errors');
var actions = require('../../../../../verror/actions');






module.exports = {};



// Types:




// Consts:



// Errors:

module.exports.NoCompatibleVersionError = makeError('v.io/v23/rpc/version.NoCompatibleVersion', actions.NO_RETRY, {
  'en': '{1:}{2:} There were no compatible versions between ({3},{4}) and ({5},{6}).',
}, [
  vdl.types.UINT64,
  vdl.types.UINT64,
  vdl.types.UINT64,
  vdl.types.UINT64,
]);




// Services:

   
 

