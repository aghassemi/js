// This file was auto-generated by the vanadium vdl tool.
var vdl = require('../../../../vdl');
var makeError = require('../../../../errors/make-errors');
var actions = require('../../../../errors/actions');
var canonicalize = require('../../../../vdl/canonicalize');





var time = require('./../vdlroot/time');
var uniqueid = require('./../uniqueid');

module.exports = {};



// Types:
var _type1 = new vdl.Type();
var _type2 = new vdl.Type();
var _type3 = new vdl.Type();
var _type4 = new vdl.Type();
var _type5 = new vdl.Type();
var _type6 = new vdl.Type();
var _type7 = new vdl.Type();
var _type8 = new vdl.Type();
var _typeBlessingPattern = new vdl.Type();
var _typeCallSide = new vdl.Type();
var _typeCaveat = new vdl.Type();
var _typeCaveatDescriptor = new vdl.Type();
var _typeCertificate = new vdl.Type();
var _typeDischargeImpetus = new vdl.Type();
var _typeHash = new vdl.Type();
var _typeRejectedBlessing = new vdl.Type();
var _typeSignature = new vdl.Type();
var _typeThirdPartyRequirements = new vdl.Type();
var _typeWireBlessings = new vdl.Type();
var _typeWireDischarge = new vdl.Type();
var _typeerror = new vdl.Type();
var _typenonce = new vdl.Type();
var _typepublicKeyDischarge = new vdl.Type();
var _typepublicKeyThirdPartyCaveat = new vdl.Type();
_type1.kind = vdl.Kind.LIST;
_type1.name = "";
_type1.elem = _typeCaveat;
_type2.kind = vdl.Kind.LIST;
_type2.name = "";
_type2.elem = vdl.Types.BYTE;
_type3.kind = vdl.Kind.LIST;
_type3.name = "";
_type3.elem = vdl.Types.STRING;
_type4.kind = vdl.Kind.ENUM;
_type4.name = "";
_type4.labels = ["NoRetry", "RetryConnection", "RetryRefetch", "RetryBackoff"];
_type5.kind = vdl.Kind.LIST;
_type5.name = "";
_type5.elem = vdl.Types.ANY;
_type6.kind = vdl.Kind.LIST;
_type6.name = "";
_type6.elem = _typeBlessingPattern;
_type7.kind = vdl.Kind.LIST;
_type7.name = "";
_type7.elem = _type8;
_type8.kind = vdl.Kind.LIST;
_type8.name = "";
_type8.elem = _typeCertificate;
_typeBlessingPattern.kind = vdl.Kind.STRING;
_typeBlessingPattern.name = "v.io/v23/security.BlessingPattern";
_typeCallSide.kind = vdl.Kind.ENUM;
_typeCallSide.name = "v.io/v23/security.CallSide";
_typeCallSide.labels = ["Local", "Remote"];
_typeCaveat.kind = vdl.Kind.STRUCT;
_typeCaveat.name = "v.io/v23/security.Caveat";
_typeCaveat.fields = [{name: "Id", type: new uniqueid.Id()._type}, {name: "ParamVom", type: _type2}];
_typeCaveatDescriptor.kind = vdl.Kind.STRUCT;
_typeCaveatDescriptor.name = "v.io/v23/security.CaveatDescriptor";
_typeCaveatDescriptor.fields = [{name: "Id", type: new uniqueid.Id()._type}, {name: "ParamType", type: vdl.Types.TYPEOBJECT}];
_typeCertificate.kind = vdl.Kind.STRUCT;
_typeCertificate.name = "v.io/v23/security.Certificate";
_typeCertificate.fields = [{name: "Extension", type: vdl.Types.STRING}, {name: "PublicKey", type: _type2}, {name: "Caveats", type: _type1}, {name: "Signature", type: _typeSignature}];
_typeDischargeImpetus.kind = vdl.Kind.STRUCT;
_typeDischargeImpetus.name = "v.io/v23/security.DischargeImpetus";
_typeDischargeImpetus.fields = [{name: "Server", type: _type6}, {name: "Method", type: vdl.Types.STRING}, {name: "Arguments", type: _type5}];
_typeHash.kind = vdl.Kind.STRING;
_typeHash.name = "v.io/v23/security.Hash";
_typeRejectedBlessing.kind = vdl.Kind.STRUCT;
_typeRejectedBlessing.name = "v.io/v23/security.RejectedBlessing";
_typeRejectedBlessing.fields = [{name: "Blessing", type: vdl.Types.STRING}, {name: "Err", type: vdl.Types.ERROR}];
_typeSignature.kind = vdl.Kind.STRUCT;
_typeSignature.name = "v.io/v23/security.Signature";
_typeSignature.fields = [{name: "Purpose", type: _type2}, {name: "Hash", type: _typeHash}, {name: "R", type: _type2}, {name: "S", type: _type2}];
_typeThirdPartyRequirements.kind = vdl.Kind.STRUCT;
_typeThirdPartyRequirements.name = "v.io/v23/security.ThirdPartyRequirements";
_typeThirdPartyRequirements.fields = [{name: "ReportServer", type: vdl.Types.BOOL}, {name: "ReportMethod", type: vdl.Types.BOOL}, {name: "ReportArguments", type: vdl.Types.BOOL}];
_typeWireBlessings.kind = vdl.Kind.STRUCT;
_typeWireBlessings.name = "v.io/v23/security.WireBlessings";
_typeWireBlessings.fields = [{name: "CertificateChains", type: _type7}];
_typeWireDischarge.kind = vdl.Kind.UNION;
_typeWireDischarge.name = "v.io/v23/security.WireDischarge";
_typeWireDischarge.fields = [{name: "PublicKey", type: _typepublicKeyDischarge}];
_typeerror.kind = vdl.Kind.STRUCT;
_typeerror.name = "error";
_typeerror.fields = [{name: "Id", type: vdl.Types.STRING}, {name: "RetryCode", type: _type4}, {name: "Msg", type: vdl.Types.STRING}, {name: "ParamList", type: _type5}];
_typenonce.kind = vdl.Kind.ARRAY;
_typenonce.name = "v.io/v23/security.nonce";
_typenonce.len = 16;
_typenonce.elem = vdl.Types.BYTE;
_typepublicKeyDischarge.kind = vdl.Kind.STRUCT;
_typepublicKeyDischarge.name = "v.io/v23/security.publicKeyDischarge";
_typepublicKeyDischarge.fields = [{name: "ThirdPartyCaveatId", type: vdl.Types.STRING}, {name: "Caveats", type: _type1}, {name: "Signature", type: _typeSignature}];
_typepublicKeyThirdPartyCaveat.kind = vdl.Kind.STRUCT;
_typepublicKeyThirdPartyCaveat.name = "v.io/v23/security.publicKeyThirdPartyCaveat";
_typepublicKeyThirdPartyCaveat.fields = [{name: "Nonce", type: _typenonce}, {name: "Caveats", type: _type1}, {name: "DischargerKey", type: _type2}, {name: "DischargerLocation", type: vdl.Types.STRING}, {name: "DischargerRequirements", type: _typeThirdPartyRequirements}];
_type1.freeze();
_type2.freeze();
_type3.freeze();
_type4.freeze();
_type5.freeze();
_type6.freeze();
_type7.freeze();
_type8.freeze();
_typeBlessingPattern.freeze();
_typeCallSide.freeze();
_typeCaveat.freeze();
_typeCaveatDescriptor.freeze();
_typeCertificate.freeze();
_typeDischargeImpetus.freeze();
_typeHash.freeze();
_typeRejectedBlessing.freeze();
_typeSignature.freeze();
_typeThirdPartyRequirements.freeze();
_typeWireBlessings.freeze();
_typeWireDischarge.freeze();
_typeerror.freeze();
_typenonce.freeze();
_typepublicKeyDischarge.freeze();
_typepublicKeyThirdPartyCaveat.freeze();
module.exports.BlessingPattern = (vdl.Registry.lookupOrCreateConstructor(_typeBlessingPattern));
module.exports.CallSide = (vdl.Registry.lookupOrCreateConstructor(_typeCallSide));
module.exports.Caveat = (vdl.Registry.lookupOrCreateConstructor(_typeCaveat));
module.exports.CaveatDescriptor = (vdl.Registry.lookupOrCreateConstructor(_typeCaveatDescriptor));
module.exports.Certificate = (vdl.Registry.lookupOrCreateConstructor(_typeCertificate));
module.exports.DischargeImpetus = (vdl.Registry.lookupOrCreateConstructor(_typeDischargeImpetus));
module.exports.Hash = (vdl.Registry.lookupOrCreateConstructor(_typeHash));
module.exports.RejectedBlessing = (vdl.Registry.lookupOrCreateConstructor(_typeRejectedBlessing));
module.exports.Signature = (vdl.Registry.lookupOrCreateConstructor(_typeSignature));
module.exports.ThirdPartyRequirements = (vdl.Registry.lookupOrCreateConstructor(_typeThirdPartyRequirements));
module.exports.WireBlessings = (vdl.Registry.lookupOrCreateConstructor(_typeWireBlessings));
module.exports.WireDischarge = (vdl.Registry.lookupOrCreateConstructor(_typeWireDischarge));
module.exports.error = (vdl.Registry.lookupOrCreateConstructor(_typeerror));
module.exports.nonce = (vdl.Registry.lookupOrCreateConstructor(_typenonce));
module.exports.publicKeyDischarge = (vdl.Registry.lookupOrCreateConstructor(_typepublicKeyDischarge));
module.exports.publicKeyThirdPartyCaveat = (vdl.Registry.lookupOrCreateConstructor(_typepublicKeyThirdPartyCaveat));




// Consts:

  module.exports.ConstCaveat = canonicalize.reduce(new (vdl.Registry.lookupOrCreateConstructor(_typeCaveatDescriptor))({
  'id': new Uint8Array([
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
]),
  'paramType': vdl.Types.BOOL,
}, true), _typeCaveatDescriptor);

  module.exports.ExpiryCaveatX = canonicalize.reduce(new (vdl.Registry.lookupOrCreateConstructor(_typeCaveatDescriptor))({
  'id': new Uint8Array([
166,
76,
45,
1,
25,
251,
163,
52,
128,
113,
254,
235,
47,
48,
128,
0,
]),
  'paramType': new time.Time()._type,
}, true), _typeCaveatDescriptor);

  module.exports.MethodCaveatX = canonicalize.reduce(new (vdl.Registry.lookupOrCreateConstructor(_typeCaveatDescriptor))({
  'id': new Uint8Array([
84,
166,
118,
57,
129,
55,
24,
126,
205,
178,
109,
45,
105,
186,
0,
3,
]),
  'paramType': _type3,
}, true), _typeCaveatDescriptor);

  module.exports.PublicKeyThirdPartyCaveatX = canonicalize.reduce(new (vdl.Registry.lookupOrCreateConstructor(_typeCaveatDescriptor))({
  'id': new Uint8Array([
121,
114,
206,
23,
74,
123,
169,
63,
121,
84,
125,
118,
156,
145,
128,
0,
]),
  'paramType': _typepublicKeyThirdPartyCaveat,
}, true), _typeCaveatDescriptor);

  module.exports.NoExtension = canonicalize.reduce(new (vdl.Registry.lookupOrCreateConstructor(_typeBlessingPattern))("$", true), _typeBlessingPattern);

  module.exports.AllPrincipals = canonicalize.reduce(new (vdl.Registry.lookupOrCreateConstructor(_typeBlessingPattern))("...", true), _typeBlessingPattern);

  module.exports.ChainSeparator = canonicalize.reduce(new (vdl.Registry.lookupOrCreateConstructor(vdl.Types.STRING))("/", true), vdl.Types.STRING);

  module.exports.SHA1Hash = canonicalize.reduce(new (vdl.Registry.lookupOrCreateConstructor(_typeHash))("SHA1", true), _typeHash);

  module.exports.SHA256Hash = canonicalize.reduce(new (vdl.Registry.lookupOrCreateConstructor(_typeHash))("SHA256", true), _typeHash);

  module.exports.SHA384Hash = canonicalize.reduce(new (vdl.Registry.lookupOrCreateConstructor(_typeHash))("SHA384", true), _typeHash);

  module.exports.SHA512Hash = canonicalize.reduce(new (vdl.Registry.lookupOrCreateConstructor(_typeHash))("SHA512", true), _typeHash);

  module.exports.SignatureForMessageSigning = canonicalize.reduce(new (vdl.Registry.lookupOrCreateConstructor(vdl.Types.STRING))("S", true), vdl.Types.STRING);

  module.exports.SignatureForBlessingCertificates = canonicalize.reduce(new (vdl.Registry.lookupOrCreateConstructor(vdl.Types.STRING))("B", true), vdl.Types.STRING);

  module.exports.SignatureForDischarge = canonicalize.reduce(new (vdl.Registry.lookupOrCreateConstructor(vdl.Types.STRING))("D", true), vdl.Types.STRING);



// Errors:

module.exports.CaveatNotRegisteredError = makeError('v.io/v23/security.CaveatNotRegistered', actions.NO_RETRY, {
  'en': '{1:}{2:} no validation function registered for caveat id {3}',
}, [
  new uniqueid.Id()._type,
]);


module.exports.CaveatParamAnyError = makeError('v.io/v23/security.CaveatParamAny', actions.NO_RETRY, {
  'en': '{1:}{2:} caveat {3} uses illegal param type any',
}, [
  new uniqueid.Id()._type,
]);


module.exports.CaveatParamTypeMismatchError = makeError('v.io/v23/security.CaveatParamTypeMismatch', actions.NO_RETRY, {
  'en': '{1:}{2:} bad param type: caveat {3} got {4}, want {5}',
}, [
  new uniqueid.Id()._type,
  vdl.Types.TYPEOBJECT,
  vdl.Types.TYPEOBJECT,
]);


module.exports.CaveatParamCodingError = makeError('v.io/v23/security.CaveatParamCoding', actions.NO_RETRY, {
  'en': '{1:}{2:} unable to encode/decode caveat param(type={4}) for caveat {3}: {5}',
}, [
  new uniqueid.Id()._type,
  vdl.Types.TYPEOBJECT,
  vdl.Types.ERROR,
]);


module.exports.CaveatValidationError = makeError('v.io/v23/security.CaveatValidation', actions.NO_RETRY, {
  'en': '{1:}{2:} caveat validation failed: {3}',
}, [
  vdl.Types.ERROR,
]);


module.exports.ConstCaveatValidationError = makeError('v.io/v23/security.ConstCaveatValidation', actions.NO_RETRY, {
  'en': '{1:}{2:} false const caveat always fails validation',
}, [
]);


module.exports.ExpiryCaveatValidationError = makeError('v.io/v23/security.ExpiryCaveatValidation', actions.NO_RETRY, {
  'en': '{1:}{2:} now({4}) is after expiry({3})',
}, [
  new time.Time()._type,
  new time.Time()._type,
]);


module.exports.MethodCaveatValidationError = makeError('v.io/v23/security.MethodCaveatValidation', actions.NO_RETRY, {
  'en': '{1:}{2:} method {3} not in list {4}',
}, [
  vdl.Types.STRING,
  _type3,
]);


module.exports.UntrustedRootError = makeError('v.io/v23/security.UntrustedRoot', actions.NO_RETRY, {
  'en': '{1:}{2:} {3}: root not trusted',
}, [
  vdl.Types.STRING,
]);




// Services:

   

   
 


