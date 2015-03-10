// This file was auto-generated by the vanadium vdl tool.
var vdl = require('../../../../../../../vdl');






module.exports = {};



// Types:
var _typeMessage = new vdl.Type();
var _typeRequest = new vdl.Type();
var _typeResponse = new vdl.Type();
_typeMessage.kind = vdl.Kind.UNION;
_typeMessage.name = "v.io/x/ref/services/wsprd/channel.Message";
_typeMessage.fields = [{name: "Request", type: _typeRequest}, {name: "Response", type: _typeResponse}];
_typeRequest.kind = vdl.Kind.STRUCT;
_typeRequest.name = "v.io/x/ref/services/wsprd/channel.Request";
_typeRequest.fields = [{name: "Type", type: vdl.Types.STRING}, {name: "Seq", type: vdl.Types.UINT32}, {name: "Body", type: vdl.Types.ANY}];
_typeResponse.kind = vdl.Kind.STRUCT;
_typeResponse.name = "v.io/x/ref/services/wsprd/channel.Response";
_typeResponse.fields = [{name: "ReqSeq", type: vdl.Types.UINT32}, {name: "Err", type: vdl.Types.STRING}, {name: "Body", type: vdl.Types.ANY}];
_typeMessage.freeze();
_typeRequest.freeze();
_typeResponse.freeze();
module.exports.Message = (vdl.Registry.lookupOrCreateConstructor(_typeMessage));
module.exports.Request = (vdl.Registry.lookupOrCreateConstructor(_typeRequest));
module.exports.Response = (vdl.Registry.lookupOrCreateConstructor(_typeResponse));




// Consts:



// Errors:



// Services:

   
 

