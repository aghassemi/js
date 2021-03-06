// Copyright 2015 The Vanadium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

// This file was auto-generated by the vanadium vdl tool.
var vdl = require('../../../../../vdl');






module.exports = {};



// Types:
var _type1 = new vdl.Type();
var _type2 = new vdl.Type();
var _type3 = new vdl.Type();
var _type4 = new vdl.Type();
var _type5 = new vdl.Type();
var _typeArg = new vdl.Type();
var _typeEmbed = new vdl.Type();
var _typeInterface = new vdl.Type();
var _typeMethod = new vdl.Type();
_type1.kind = vdl.kind.LIST;
_type1.name = "";
_type1.elem = _typeArg;
_type2.kind = vdl.kind.OPTIONAL;
_type2.name = "";
_type2.elem = _typeArg;
_type3.kind = vdl.kind.LIST;
_type3.name = "";
_type3.elem = vdl.types.ANY;
_type4.kind = vdl.kind.LIST;
_type4.name = "";
_type4.elem = _typeEmbed;
_type5.kind = vdl.kind.LIST;
_type5.name = "";
_type5.elem = _typeMethod;
_typeArg.kind = vdl.kind.STRUCT;
_typeArg.name = "signature.Arg";
_typeArg.fields = [{name: "Name", type: vdl.types.STRING}, {name: "Doc", type: vdl.types.STRING}, {name: "Type", type: vdl.types.TYPEOBJECT}];
_typeEmbed.kind = vdl.kind.STRUCT;
_typeEmbed.name = "signature.Embed";
_typeEmbed.fields = [{name: "Name", type: vdl.types.STRING}, {name: "PkgPath", type: vdl.types.STRING}, {name: "Doc", type: vdl.types.STRING}];
_typeInterface.kind = vdl.kind.STRUCT;
_typeInterface.name = "signature.Interface";
_typeInterface.fields = [{name: "Name", type: vdl.types.STRING}, {name: "PkgPath", type: vdl.types.STRING}, {name: "Doc", type: vdl.types.STRING}, {name: "Embeds", type: _type4}, {name: "Methods", type: _type5}];
_typeMethod.kind = vdl.kind.STRUCT;
_typeMethod.name = "signature.Method";
_typeMethod.fields = [{name: "Name", type: vdl.types.STRING}, {name: "Doc", type: vdl.types.STRING}, {name: "InArgs", type: _type1}, {name: "OutArgs", type: _type1}, {name: "InStream", type: _type2}, {name: "OutStream", type: _type2}, {name: "Tags", type: _type3}];
_type1.freeze();
_type2.freeze();
_type3.freeze();
_type4.freeze();
_type5.freeze();
_typeArg.freeze();
_typeEmbed.freeze();
_typeInterface.freeze();
_typeMethod.freeze();
module.exports.Arg = (vdl.registry.lookupOrCreateConstructor(_typeArg));
module.exports.Embed = (vdl.registry.lookupOrCreateConstructor(_typeEmbed));
module.exports.Interface = (vdl.registry.lookupOrCreateConstructor(_typeInterface));
module.exports.Method = (vdl.registry.lookupOrCreateConstructor(_typeMethod));




// Consts:



// Errors:



// Services:

   
 


