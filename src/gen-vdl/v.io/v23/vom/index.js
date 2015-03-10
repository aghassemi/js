// This file was auto-generated by the vanadium vdl tool.
var vdl = require('../../../../vdl');
var canonicalize = require('../../../../vdl/canonicalize');






module.exports = {};



// Types:
var _type1 = new vdl.Type();
var _type2 = new vdl.Type();
var _type3 = new vdl.Type();
var _typeControlKind = new vdl.Type();
var _typeDumpAtom = new vdl.Type();
var _typeDumpKind = new vdl.Type();
var _typePrimitive = new vdl.Type();
var _typetypeID = new vdl.Type();
var _typewireArray = new vdl.Type();
var _typewireEnum = new vdl.Type();
var _typewireField = new vdl.Type();
var _typewireList = new vdl.Type();
var _typewireMap = new vdl.Type();
var _typewireNamed = new vdl.Type();
var _typewireOptional = new vdl.Type();
var _typewireSet = new vdl.Type();
var _typewireStruct = new vdl.Type();
var _typewireType = new vdl.Type();
var _typewireUnion = new vdl.Type();
_type1.kind = vdl.Kind.LIST;
_type1.name = "";
_type1.elem = vdl.Types.BYTE;
_type2.kind = vdl.Kind.LIST;
_type2.name = "";
_type2.elem = vdl.Types.STRING;
_type3.kind = vdl.Kind.LIST;
_type3.name = "";
_type3.elem = _typewireField;
_typeControlKind.kind = vdl.Kind.ENUM;
_typeControlKind.name = "v.io/v23/vom.ControlKind";
_typeControlKind.labels = ["NIL", "EOF"];
_typeDumpAtom.kind = vdl.Kind.STRUCT;
_typeDumpAtom.name = "v.io/v23/vom.DumpAtom";
_typeDumpAtom.fields = [{name: "Kind", type: _typeDumpKind}, {name: "Bytes", type: _type1}, {name: "Data", type: _typePrimitive}, {name: "Debug", type: vdl.Types.STRING}];
_typeDumpKind.kind = vdl.Kind.ENUM;
_typeDumpKind.name = "v.io/v23/vom.DumpKind";
_typeDumpKind.labels = ["Magic", "Control", "MsgID", "TypeMsg", "ValueMsg", "MsgLen", "TypeID", "PrimValue", "ByteLen", "ValueLen", "Index", "WireTypeIndex"];
_typePrimitive.kind = vdl.Kind.UNION;
_typePrimitive.name = "v.io/v23/vom.Primitive";
_typePrimitive.fields = [{name: "PBool", type: vdl.Types.BOOL}, {name: "PByte", type: vdl.Types.BYTE}, {name: "PUint", type: vdl.Types.UINT64}, {name: "PInt", type: vdl.Types.INT64}, {name: "PFloat", type: vdl.Types.FLOAT64}, {name: "PString", type: vdl.Types.STRING}, {name: "PControl", type: _typeControlKind}];
_typetypeID.kind = vdl.Kind.UINT64;
_typetypeID.name = "v.io/v23/vom.typeID";
_typewireArray.kind = vdl.Kind.STRUCT;
_typewireArray.name = "v.io/v23/vom.wireArray";
_typewireArray.fields = [{name: "Name", type: vdl.Types.STRING}, {name: "Elem", type: _typetypeID}, {name: "Len", type: vdl.Types.UINT64}];
_typewireEnum.kind = vdl.Kind.STRUCT;
_typewireEnum.name = "v.io/v23/vom.wireEnum";
_typewireEnum.fields = [{name: "Name", type: vdl.Types.STRING}, {name: "Labels", type: _type2}];
_typewireField.kind = vdl.Kind.STRUCT;
_typewireField.name = "v.io/v23/vom.wireField";
_typewireField.fields = [{name: "Name", type: vdl.Types.STRING}, {name: "Type", type: _typetypeID}];
_typewireList.kind = vdl.Kind.STRUCT;
_typewireList.name = "v.io/v23/vom.wireList";
_typewireList.fields = [{name: "Name", type: vdl.Types.STRING}, {name: "Elem", type: _typetypeID}];
_typewireMap.kind = vdl.Kind.STRUCT;
_typewireMap.name = "v.io/v23/vom.wireMap";
_typewireMap.fields = [{name: "Name", type: vdl.Types.STRING}, {name: "Key", type: _typetypeID}, {name: "Elem", type: _typetypeID}];
_typewireNamed.kind = vdl.Kind.STRUCT;
_typewireNamed.name = "v.io/v23/vom.wireNamed";
_typewireNamed.fields = [{name: "Name", type: vdl.Types.STRING}, {name: "Base", type: _typetypeID}];
_typewireOptional.kind = vdl.Kind.STRUCT;
_typewireOptional.name = "v.io/v23/vom.wireOptional";
_typewireOptional.fields = [{name: "Name", type: vdl.Types.STRING}, {name: "Elem", type: _typetypeID}];
_typewireSet.kind = vdl.Kind.STRUCT;
_typewireSet.name = "v.io/v23/vom.wireSet";
_typewireSet.fields = [{name: "Name", type: vdl.Types.STRING}, {name: "Key", type: _typetypeID}];
_typewireStruct.kind = vdl.Kind.STRUCT;
_typewireStruct.name = "v.io/v23/vom.wireStruct";
_typewireStruct.fields = [{name: "Name", type: vdl.Types.STRING}, {name: "Fields", type: _type3}];
_typewireType.kind = vdl.Kind.UNION;
_typewireType.name = "v.io/v23/vom.wireType";
_typewireType.fields = [{name: "NamedT", type: _typewireNamed}, {name: "EnumT", type: _typewireEnum}, {name: "ArrayT", type: _typewireArray}, {name: "ListT", type: _typewireList}, {name: "SetT", type: _typewireSet}, {name: "MapT", type: _typewireMap}, {name: "StructT", type: _typewireStruct}, {name: "UnionT", type: _typewireUnion}, {name: "OptionalT", type: _typewireOptional}];
_typewireUnion.kind = vdl.Kind.STRUCT;
_typewireUnion.name = "v.io/v23/vom.wireUnion";
_typewireUnion.fields = [{name: "Name", type: vdl.Types.STRING}, {name: "Fields", type: _type3}];
_type1.freeze();
_type2.freeze();
_type3.freeze();
_typeControlKind.freeze();
_typeDumpAtom.freeze();
_typeDumpKind.freeze();
_typePrimitive.freeze();
_typetypeID.freeze();
_typewireArray.freeze();
_typewireEnum.freeze();
_typewireField.freeze();
_typewireList.freeze();
_typewireMap.freeze();
_typewireNamed.freeze();
_typewireOptional.freeze();
_typewireSet.freeze();
_typewireStruct.freeze();
_typewireType.freeze();
_typewireUnion.freeze();
module.exports.ControlKind = (vdl.Registry.lookupOrCreateConstructor(_typeControlKind));
module.exports.DumpAtom = (vdl.Registry.lookupOrCreateConstructor(_typeDumpAtom));
module.exports.DumpKind = (vdl.Registry.lookupOrCreateConstructor(_typeDumpKind));
module.exports.Primitive = (vdl.Registry.lookupOrCreateConstructor(_typePrimitive));
module.exports.typeID = (vdl.Registry.lookupOrCreateConstructor(_typetypeID));
module.exports.wireArray = (vdl.Registry.lookupOrCreateConstructor(_typewireArray));
module.exports.wireEnum = (vdl.Registry.lookupOrCreateConstructor(_typewireEnum));
module.exports.wireField = (vdl.Registry.lookupOrCreateConstructor(_typewireField));
module.exports.wireList = (vdl.Registry.lookupOrCreateConstructor(_typewireList));
module.exports.wireMap = (vdl.Registry.lookupOrCreateConstructor(_typewireMap));
module.exports.wireNamed = (vdl.Registry.lookupOrCreateConstructor(_typewireNamed));
module.exports.wireOptional = (vdl.Registry.lookupOrCreateConstructor(_typewireOptional));
module.exports.wireSet = (vdl.Registry.lookupOrCreateConstructor(_typewireSet));
module.exports.wireStruct = (vdl.Registry.lookupOrCreateConstructor(_typewireStruct));
module.exports.wireType = (vdl.Registry.lookupOrCreateConstructor(_typewireType));
module.exports.wireUnion = (vdl.Registry.lookupOrCreateConstructor(_typewireUnion));




// Consts:

  module.exports.WireIDBool = canonicalize.reduce(new (vdl.Registry.lookupOrCreateConstructor(_typetypeID))(new vdl.BigInt(1, new Uint8Array([0x1])), true), _typetypeID);

  module.exports.WireIDByte = canonicalize.reduce(new (vdl.Registry.lookupOrCreateConstructor(_typetypeID))(new vdl.BigInt(1, new Uint8Array([0x2])), true), _typetypeID);

  module.exports.WireIDString = canonicalize.reduce(new (vdl.Registry.lookupOrCreateConstructor(_typetypeID))(new vdl.BigInt(1, new Uint8Array([0x3])), true), _typetypeID);

  module.exports.WireIDUint16 = canonicalize.reduce(new (vdl.Registry.lookupOrCreateConstructor(_typetypeID))(new vdl.BigInt(1, new Uint8Array([0x4])), true), _typetypeID);

  module.exports.WireIDUint32 = canonicalize.reduce(new (vdl.Registry.lookupOrCreateConstructor(_typetypeID))(new vdl.BigInt(1, new Uint8Array([0x5])), true), _typetypeID);

  module.exports.WireIDUint64 = canonicalize.reduce(new (vdl.Registry.lookupOrCreateConstructor(_typetypeID))(new vdl.BigInt(1, new Uint8Array([0x6])), true), _typetypeID);

  module.exports.WireIDInt16 = canonicalize.reduce(new (vdl.Registry.lookupOrCreateConstructor(_typetypeID))(new vdl.BigInt(1, new Uint8Array([0x7])), true), _typetypeID);

  module.exports.WireIDInt32 = canonicalize.reduce(new (vdl.Registry.lookupOrCreateConstructor(_typetypeID))(new vdl.BigInt(1, new Uint8Array([0x8])), true), _typetypeID);

  module.exports.WireIDInt64 = canonicalize.reduce(new (vdl.Registry.lookupOrCreateConstructor(_typetypeID))(new vdl.BigInt(1, new Uint8Array([0x9])), true), _typetypeID);

  module.exports.WireIDFloat32 = canonicalize.reduce(new (vdl.Registry.lookupOrCreateConstructor(_typetypeID))(new vdl.BigInt(1, new Uint8Array([0xa])), true), _typetypeID);

  module.exports.WireIDFloat64 = canonicalize.reduce(new (vdl.Registry.lookupOrCreateConstructor(_typetypeID))(new vdl.BigInt(1, new Uint8Array([0xb])), true), _typetypeID);

  module.exports.WireIDComplex64 = canonicalize.reduce(new (vdl.Registry.lookupOrCreateConstructor(_typetypeID))(new vdl.BigInt(1, new Uint8Array([0xc])), true), _typetypeID);

  module.exports.WireIDComplex128 = canonicalize.reduce(new (vdl.Registry.lookupOrCreateConstructor(_typetypeID))(new vdl.BigInt(1, new Uint8Array([0xd])), true), _typetypeID);

  module.exports.WireIDTypeObject = canonicalize.reduce(new (vdl.Registry.lookupOrCreateConstructor(_typetypeID))(new vdl.BigInt(1, new Uint8Array([0xe])), true), _typetypeID);

  module.exports.WireIDAny = canonicalize.reduce(new (vdl.Registry.lookupOrCreateConstructor(_typetypeID))(new vdl.BigInt(1, new Uint8Array([0xf])), true), _typetypeID);

  module.exports.WireIDByteList = canonicalize.reduce(new (vdl.Registry.lookupOrCreateConstructor(_typetypeID))(new vdl.BigInt(1, new Uint8Array([0x27])), true), _typetypeID);

  module.exports.WireIDStringList = canonicalize.reduce(new (vdl.Registry.lookupOrCreateConstructor(_typetypeID))(new vdl.BigInt(1, new Uint8Array([0x28])), true), _typetypeID);

  module.exports.WireIDFirstUserType = canonicalize.reduce(new (vdl.Registry.lookupOrCreateConstructor(_typetypeID))(new vdl.BigInt(1, new Uint8Array([0x29])), true), _typetypeID);

  module.exports.WireCtrlNil = canonicalize.reduce(new (vdl.Registry.lookupOrCreateConstructor(vdl.Types.BYTE))(224, true), vdl.Types.BYTE);

  module.exports.WireCtrlEOF = canonicalize.reduce(new (vdl.Registry.lookupOrCreateConstructor(vdl.Types.BYTE))(225, true), vdl.Types.BYTE);



// Errors:



// Services:

   

   
 

