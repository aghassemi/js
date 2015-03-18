// This file was auto-generated by the vanadium vdl tool.
var vdl = require('../../../../vdl');
var canonicalize = require('../../../../vdl/canonicalize');





var time = require('./../vdlroot/time');

module.exports = {};



// Types:
var _type1 = new vdl.Type();
var _type2 = new vdl.Type();
var _typeGlobError = new vdl.Type();
var _typeGlobReply = new vdl.Type();
var _typeMountEntry = new vdl.Type();
var _typeMountFlag = new vdl.Type();
var _typeMountedServer = new vdl.Type();
_type1.kind = vdl.Kind.LIST;
_type1.name = "";
_type1.elem = vdl.Types.STRING;
_type2.kind = vdl.Kind.LIST;
_type2.name = "";
_type2.elem = _typeMountedServer;
_typeGlobError.kind = vdl.Kind.STRUCT;
_typeGlobError.name = "v.io/v23/naming.GlobError";
_typeGlobError.fields = [{name: "Name", type: vdl.Types.STRING}, {name: "Error", type: vdl.Types.ERROR}];
_typeGlobReply.kind = vdl.Kind.UNION;
_typeGlobReply.name = "v.io/v23/naming.GlobReply";
_typeGlobReply.fields = [{name: "Entry", type: _typeMountEntry}, {name: "Error", type: _typeGlobError}];
_typeMountEntry.kind = vdl.Kind.STRUCT;
_typeMountEntry.name = "v.io/v23/naming.MountEntry";
_typeMountEntry.fields = [{name: "Name", type: vdl.Types.STRING}, {name: "Servers", type: _type2}, {name: "ServesMountTable", type: vdl.Types.BOOL}];
_typeMountFlag.kind = vdl.Kind.UINT32;
_typeMountFlag.name = "v.io/v23/naming.MountFlag";
_typeMountedServer.kind = vdl.Kind.STRUCT;
_typeMountedServer.name = "v.io/v23/naming.MountedServer";
_typeMountedServer.fields = [{name: "Server", type: vdl.Types.STRING}, {name: "BlessingPatterns", type: _type1}, {name: "Deadline", type: new time.WireDeadline()._type}];
_type1.freeze();
_type2.freeze();
_typeGlobError.freeze();
_typeGlobReply.freeze();
_typeMountEntry.freeze();
_typeMountFlag.freeze();
_typeMountedServer.freeze();
module.exports.GlobError = (vdl.Registry.lookupOrCreateConstructor(_typeGlobError));
module.exports.GlobReply = (vdl.Registry.lookupOrCreateConstructor(_typeGlobReply));
module.exports.MountEntry = (vdl.Registry.lookupOrCreateConstructor(_typeMountEntry));
module.exports.MountFlag = (vdl.Registry.lookupOrCreateConstructor(_typeMountFlag));
module.exports.MountedServer = (vdl.Registry.lookupOrCreateConstructor(_typeMountedServer));




// Consts:

  module.exports.Replace = canonicalize.reduce(new (vdl.Registry.lookupOrCreateConstructor(_typeMountFlag))(1, true), _typeMountFlag);

  module.exports.MT = canonicalize.reduce(new (vdl.Registry.lookupOrCreateConstructor(_typeMountFlag))(2, true), _typeMountFlag);



// Errors:



// Services:

   
 


