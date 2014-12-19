// This file was auto-generated by the veyron vdl tool.
var vom = require('vom');
// TODO(bjornick): Remove unused imports.
var Types = vom.Types;
var Type = vom.Type;
var Kind = vom.Kind;
var BigInt = vom.BigInt;
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
var _type9 = new Type();
var _typeBlessingPattern = new Type();
var _typeCaveat = new Type();
var _typeCertificate = new Type();
var _typeDeprecatedACL = new Type();
var _typeDischargeImpetus = new Type();
var _typeHash = new Type();
var _typeLabel = new Type();
var _typeLabelSet = new Type();
var _typeSignature = new Type();
var _typeThirdPartyRequirements = new Type();
var _typeWireBlessings = new Type();
var _typemethodCaveat = new Type();
var _typepeerBlessingsCaveat = new Type();
var _typepublicKeyDischarge = new Type();
var _typepublicKeyThirdPartyCaveat = new Type();
var _typeunixTimeExpiryCaveat = new Type();
_type1.kind = Kind.ARRAY;
_type1.name = "";
_type1.len = 16;
_type1.elem = Types.BYTE;
_type2.kind = Kind.LIST;
_type2.name = "";
_type2.elem = _typeCaveat;
_type3.kind = Kind.LIST;
_type3.name = "";
_type3.elem = Types.BYTE;
_type4.kind = Kind.MAP;
_type4.name = "";
_type4.elem = _typeLabelSet;
_type4.key = _typeBlessingPattern;
_type5.kind = Kind.MAP;
_type5.name = "";
_type5.elem = _typeLabelSet;
_type5.key = Types.STRING;
_type6.kind = Kind.LIST;
_type6.name = "";
_type6.elem = _typeBlessingPattern;
_type7.kind = Kind.LIST;
_type7.name = "";
_type7.elem = Types.ANY;
_type8.kind = Kind.LIST;
_type8.name = "";
_type8.elem = _type9;
_type9.kind = Kind.LIST;
_type9.name = "";
_type9.elem = _typeCertificate;
_typeBlessingPattern.kind = Kind.STRING;
_typeBlessingPattern.name = "veyron.io/veyron/veyron2/security.BlessingPattern";
_typeCaveat.kind = Kind.STRUCT;
_typeCaveat.name = "veyron.io/veyron/veyron2/security.Caveat";
_typeCaveat.fields = [{name: "ValidatorVOM", type: _type3}];
_typeCertificate.kind = Kind.STRUCT;
_typeCertificate.name = "veyron.io/veyron/veyron2/security.Certificate";
_typeCertificate.fields = [{name: "Extension", type: Types.STRING}, {name: "PublicKey", type: _type3}, {name: "Caveats", type: _type2}, {name: "Signature", type: _typeSignature}];
_typeDeprecatedACL.kind = Kind.STRUCT;
_typeDeprecatedACL.name = "veyron.io/veyron/veyron2/security.DeprecatedACL";
_typeDeprecatedACL.fields = [{name: "In", type: _type4}, {name: "NotIn", type: _type5}];
_typeDischargeImpetus.kind = Kind.STRUCT;
_typeDischargeImpetus.name = "veyron.io/veyron/veyron2/security.DischargeImpetus";
_typeDischargeImpetus.fields = [{name: "Server", type: _type6}, {name: "Method", type: Types.STRING}, {name: "Arguments", type: _type7}];
_typeHash.kind = Kind.STRING;
_typeHash.name = "veyron.io/veyron/veyron2/security.Hash";
_typeLabel.kind = Kind.UINT32;
_typeLabel.name = "veyron.io/veyron/veyron2/security.Label";
_typeLabelSet.kind = Kind.UINT32;
_typeLabelSet.name = "veyron.io/veyron/veyron2/security.LabelSet";
_typeSignature.kind = Kind.STRUCT;
_typeSignature.name = "veyron.io/veyron/veyron2/security.Signature";
_typeSignature.fields = [{name: "Purpose", type: _type3}, {name: "Hash", type: _typeHash}, {name: "R", type: _type3}, {name: "S", type: _type3}];
_typeThirdPartyRequirements.kind = Kind.STRUCT;
_typeThirdPartyRequirements.name = "veyron.io/veyron/veyron2/security.ThirdPartyRequirements";
_typeThirdPartyRequirements.fields = [{name: "ReportServer", type: Types.BOOL}, {name: "ReportMethod", type: Types.BOOL}, {name: "ReportArguments", type: Types.BOOL}];
_typeWireBlessings.kind = Kind.STRUCT;
_typeWireBlessings.name = "veyron.io/veyron/veyron2/security.WireBlessings";
_typeWireBlessings.fields = [{name: "CertificateChains", type: _type8}];
_typemethodCaveat.kind = Kind.LIST;
_typemethodCaveat.name = "veyron.io/veyron/veyron2/security.methodCaveat";
_typemethodCaveat.elem = Types.STRING;
_typepeerBlessingsCaveat.kind = Kind.LIST;
_typepeerBlessingsCaveat.name = "veyron.io/veyron/veyron2/security.peerBlessingsCaveat";
_typepeerBlessingsCaveat.elem = _typeBlessingPattern;
_typepublicKeyDischarge.kind = Kind.STRUCT;
_typepublicKeyDischarge.name = "veyron.io/veyron/veyron2/security.publicKeyDischarge";
_typepublicKeyDischarge.fields = [{name: "ThirdPartyCaveatID", type: Types.STRING}, {name: "Caveats", type: _type2}, {name: "Signature", type: _typeSignature}];
_typepublicKeyThirdPartyCaveat.kind = Kind.STRUCT;
_typepublicKeyThirdPartyCaveat.name = "veyron.io/veyron/veyron2/security.publicKeyThirdPartyCaveat";
_typepublicKeyThirdPartyCaveat.fields = [{name: "Nonce", type: _type1}, {name: "Caveats", type: _type2}, {name: "DischargerKey", type: _type3}, {name: "DischargerLocation", type: Types.STRING}, {name: "DischargerRequirements", type: _typeThirdPartyRequirements}];
_typeunixTimeExpiryCaveat.kind = Kind.INT64;
_typeunixTimeExpiryCaveat.name = "veyron.io/veyron/veyron2/security.unixTimeExpiryCaveat";
types.BlessingPattern = Registry.lookupOrCreateConstructor(_typeBlessingPattern, "BlessingPattern");
types.Caveat = Registry.lookupOrCreateConstructor(_typeCaveat, "Caveat");
types.Certificate = Registry.lookupOrCreateConstructor(_typeCertificate, "Certificate");
types.DeprecatedACL = Registry.lookupOrCreateConstructor(_typeDeprecatedACL, "DeprecatedACL");
types.DischargeImpetus = Registry.lookupOrCreateConstructor(_typeDischargeImpetus, "DischargeImpetus");
types.Hash = Registry.lookupOrCreateConstructor(_typeHash, "Hash");
types.Label = Registry.lookupOrCreateConstructor(_typeLabel, "Label");
types.LabelSet = Registry.lookupOrCreateConstructor(_typeLabelSet, "LabelSet");
types.Signature = Registry.lookupOrCreateConstructor(_typeSignature, "Signature");
types.ThirdPartyRequirements = Registry.lookupOrCreateConstructor(_typeThirdPartyRequirements, "ThirdPartyRequirements");
types.WireBlessings = Registry.lookupOrCreateConstructor(_typeWireBlessings, "WireBlessings");
types.methodCaveat = Registry.lookupOrCreateConstructor(_typemethodCaveat, "methodCaveat");
types.peerBlessingsCaveat = Registry.lookupOrCreateConstructor(_typepeerBlessingsCaveat, "peerBlessingsCaveat");
types.publicKeyDischarge = Registry.lookupOrCreateConstructor(_typepublicKeyDischarge, "publicKeyDischarge");
types.publicKeyThirdPartyCaveat = Registry.lookupOrCreateConstructor(_typepublicKeyThirdPartyCaveat, "publicKeyThirdPartyCaveat");
types.unixTimeExpiryCaveat = Registry.lookupOrCreateConstructor(_typeunixTimeExpiryCaveat, "unixTimeExpiryCaveat");



var consts = { 
  AllPrincipals: new (Registry.lookupOrCreateConstructor(_typeBlessingPattern))("..."),
  ChainSeparator: new (Registry.lookupOrCreateConstructor(Types.STRING))("/"),
  ResolveLabel: new (Registry.lookupOrCreateConstructor(_typeLabel))(1),
  ReadLabel: new (Registry.lookupOrCreateConstructor(_typeLabel))(2),
  WriteLabel: new (Registry.lookupOrCreateConstructor(_typeLabel))(4),
  AdminLabel: new (Registry.lookupOrCreateConstructor(_typeLabel))(8),
  DebugLabel: new (Registry.lookupOrCreateConstructor(_typeLabel))(16),
  MonitoringLabel: new (Registry.lookupOrCreateConstructor(_typeLabel))(32),
  SHA1Hash: new (Registry.lookupOrCreateConstructor(_typeHash))("SHA1"),
  SHA256Hash: new (Registry.lookupOrCreateConstructor(_typeHash))("SHA256"),
  SHA384Hash: new (Registry.lookupOrCreateConstructor(_typeHash))("SHA384"),
  SHA512Hash: new (Registry.lookupOrCreateConstructor(_typeHash))("SHA512"),
  SignatureForMessageSigning: new (Registry.lookupOrCreateConstructor(Types.STRING))("S"),
  SignatureForBlessingCertificates: new (Registry.lookupOrCreateConstructor(Types.STRING))("B"),
  SignatureForDischarge: new (Registry.lookupOrCreateConstructor(Types.STRING))("D"),
};


function NotImplementedMethod(name) {
  throw new Error('Method ' + name + ' not implemented');
}


var services = {
package: 'veyron.io/veyron/veyron2/security',

};


var serviceDefs = {
  package: 'veyron.io/veyron/veyron2/security',

  

  

};



  

  


module.exports = {
  types: types,
  serviceDefs: serviceDefs,
  services: services,
  consts: consts,
};
