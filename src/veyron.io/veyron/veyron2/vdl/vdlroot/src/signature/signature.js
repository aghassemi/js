// This file was auto-generated by the veyron vdl tool.
var vom = require('vom');
// TODO(bjornick): Remove unused imports.
var Types = vom.Types;
var Type = vom.Type;
var Kind = vom.Kind;
var Complex = vom.Complex;
var Builtins = vom.Builtins;
var Registry = vom.Registry;






var types = {};
var _type1 = new Type();
var _type2 = new Type();
var _type3 = new Type();
var _type4 = new Type();
var _type5 = new Type();
var _type6 = new Type();
var _type7 = new Type();
var _type8 = new Type();
var _typeArg = new Type();
var _typeEmbed = new Type();
var _typeInterface = new Type();
var _typeMethod = new Type();
_type1.kind = Kind.STRING;
_type1.name = "";
_type2.kind = Kind.LIST;
_type2.name = "";
_type2.elem = _typeEmbed;
_type3.kind = Kind.LIST;
_type3.name = "";
_type3.elem = _typeMethod;
_type4.kind = Kind.LIST;
_type4.name = "";
_type4.elem = _typeArg;
_type5.kind = Kind.TYPEOBJECT;
_type5.name = "";
_type6.kind = Kind.NILABLE;
_type6.name = "";
_type6.elem = _typeArg;
_type7.kind = Kind.LIST;
_type7.name = "";
_type7.elem = _type8;
_type8.kind = Kind.ANY;
_type8.name = "";
_typeArg.kind = Kind.STRUCT;
_typeArg.name = "signature.Arg";
_typeArg.fields = [{name: "Name", type: _type1}, {name: "Doc", type: _type1}, {name: "Type", type: _type5}];
_typeEmbed.kind = Kind.STRUCT;
_typeEmbed.name = "signature.Embed";
_typeEmbed.fields = [{name: "Name", type: _type1}, {name: "PkgPath", type: _type1}, {name: "Doc", type: _type1}];
_typeInterface.kind = Kind.STRUCT;
_typeInterface.name = "signature.Interface";
_typeInterface.fields = [{name: "Name", type: _type1}, {name: "PkgPath", type: _type1}, {name: "Doc", type: _type1}, {name: "Embeds", type: _type2}, {name: "Methods", type: _type3}];
_typeMethod.kind = Kind.STRUCT;
_typeMethod.name = "signature.Method";
_typeMethod.fields = [{name: "Name", type: _type1}, {name: "Doc", type: _type1}, {name: "InArgs", type: _type4}, {name: "OutArgs", type: _type4}, {name: "InStream", type: _type6}, {name: "OutStream", type: _type6}, {name: "Tags", type: _type7}];
types.Arg = Registry.lookupOrCreateConstructor(_typeArg, "Arg");
types.Embed = Registry.lookupOrCreateConstructor(_typeEmbed, "Embed");
types.Interface = Registry.lookupOrCreateConstructor(_typeInterface, "Interface");
types.Method = Registry.lookupOrCreateConstructor(_typeMethod, "Method");



var consts = { 
};


function NotImplementedMethod(name) {
  throw new Error('Method ' + name + ' not implemented');
}


var services = {
package: 'signature',

};


var serviceDefs = {
  package: 'signature',

  

};



  


module.exports = {
  types: types,
  serviceDefs: serviceDefs,
  services: services,
  consts: consts,
};
