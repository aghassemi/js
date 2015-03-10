// This file was auto-generated by the vanadium vdl tool.
var vdl = require('../../../../../vdl');
var makeError = require('../../../../../errors/make-errors');
var actions = require('../../../../../errors/actions');






module.exports = {};



// Types:




// Consts:



// Errors:

module.exports.GlobMaxRecursionReachedError = makeError('v.io/v23/ipc/reserved.GlobMaxRecursionReached', actions.NO_RETRY, {
  'en': '{1:}{2:} max recursion level reached{:_}',
}, [
]);


module.exports.GlobMatchesOmittedError = makeError('v.io/v23/ipc/reserved.GlobMatchesOmitted', actions.NO_RETRY, {
  'en': '{1:}{2:} some matches might have been omitted',
}, [
]);


module.exports.GlobNotImplementedError = makeError('v.io/v23/ipc/reserved.GlobNotImplemented', actions.NO_RETRY, {
  'en': '{1:}{2:} Glob not implemented',
}, [
]);




// Services:

   
 


