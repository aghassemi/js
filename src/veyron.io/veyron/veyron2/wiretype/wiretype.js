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
var _typeArrayType = new Type();
var _typeFieldType = new Type();
var _typeMapType = new Type();
var _typeNamedPrimitiveType = new Type();
var _typePtrType = new Type();
var _typeSliceType = new Type();
var _typeStructType = new Type();
var _typeTypeID = new Type();
_type1.kind = Kind.STRING;
_type1.name = "";
_type2.kind = Kind.LIST;
_type2.name = "";
_type2.elem = _type1;
_type3.kind = Kind.UINT64;
_type3.name = "";
_type4.kind = Kind.LIST;
_type4.name = "";
_type4.elem = _typeFieldType;
_typeArrayType.kind = Kind.STRUCT;
_typeArrayType.name = "veyron.io/veyron/veyron2/wiretype.ArrayType";
_typeArrayType.fields = [{name: "Elem", type: _typeTypeID}, {name: "Len", type: _type3}, {name: "Name", type: _type1}, {name: "Tags", type: _type2}];
_typeFieldType.kind = Kind.STRUCT;
_typeFieldType.name = "veyron.io/veyron/veyron2/wiretype.FieldType";
_typeFieldType.fields = [{name: "Type", type: _typeTypeID}, {name: "Name", type: _type1}];
_typeMapType.kind = Kind.STRUCT;
_typeMapType.name = "veyron.io/veyron/veyron2/wiretype.MapType";
_typeMapType.fields = [{name: "Key", type: _typeTypeID}, {name: "Elem", type: _typeTypeID}, {name: "Name", type: _type1}, {name: "Tags", type: _type2}];
_typeNamedPrimitiveType.kind = Kind.STRUCT;
_typeNamedPrimitiveType.name = "veyron.io/veyron/veyron2/wiretype.NamedPrimitiveType";
_typeNamedPrimitiveType.fields = [{name: "Type", type: _typeTypeID}, {name: "Name", type: _type1}, {name: "Tags", type: _type2}];
_typePtrType.kind = Kind.STRUCT;
_typePtrType.name = "veyron.io/veyron/veyron2/wiretype.PtrType";
_typePtrType.fields = [{name: "Elem", type: _typeTypeID}, {name: "Name", type: _type1}, {name: "Tags", type: _type2}];
_typeSliceType.kind = Kind.STRUCT;
_typeSliceType.name = "veyron.io/veyron/veyron2/wiretype.SliceType";
_typeSliceType.fields = [{name: "Elem", type: _typeTypeID}, {name: "Name", type: _type1}, {name: "Tags", type: _type2}];
_typeStructType.kind = Kind.STRUCT;
_typeStructType.name = "veyron.io/veyron/veyron2/wiretype.StructType";
_typeStructType.fields = [{name: "Fields", type: _type4}, {name: "Name", type: _type1}, {name: "Tags", type: _type2}];
_typeTypeID.kind = Kind.UINT64;
_typeTypeID.name = "veyron.io/veyron/veyron2/wiretype.TypeID";
types.ArrayType = Registry.lookupOrCreateConstructor(_typeArrayType, "ArrayType");
types.FieldType = Registry.lookupOrCreateConstructor(_typeFieldType, "FieldType");
types.MapType = Registry.lookupOrCreateConstructor(_typeMapType, "MapType");
types.NamedPrimitiveType = Registry.lookupOrCreateConstructor(_typeNamedPrimitiveType, "NamedPrimitiveType");
types.PtrType = Registry.lookupOrCreateConstructor(_typePtrType, "PtrType");
types.SliceType = Registry.lookupOrCreateConstructor(_typeSliceType, "SliceType");
types.StructType = Registry.lookupOrCreateConstructor(_typeStructType, "StructType");
types.TypeID = Registry.lookupOrCreateConstructor(_typeTypeID, "TypeID");



var consts = { 
};


function NotImplementedMethod(name) {
  throw new Error('Method ' + name + ' not implemented');
}


var services = {
package: 'veyron.io/veyron/veyron2/wiretype',

};


var serviceDefs = {
  package: 'veyron.io/veyron/veyron2/wiretype',

  

};



  


module.exports = {
  types: types,
  serviceDefs: serviceDefs,
  services: services,
  consts: consts,
};