// Copyright 2015 The Vanadium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

// This file was auto-generated by the vanadium vdl tool.
var vdl = require('../../../../vdl');
var makeError = require('../../../../verror/make-errors');
var actions = require('../../../../verror/actions');
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
var _type9 = new vdl.Type();
var _typeBlessingPattern = new vdl.Type();
var _typeCaveat = new vdl.Type();
var _typeCaveatDescriptor = new vdl.Type();
var _typeCertificate = new vdl.Type();
var _typeCiphertext = new vdl.Type();
var _typeDischargeImpetus = new vdl.Type();
var _typeHash = new vdl.Type();
var _typeRejectedBlessing = new vdl.Type();
var _typeSignature = new vdl.Type();
var _typeThirdPartyRequirements = new vdl.Type();
var _typeWireBlessings = new vdl.Type();
var _typeWireDischarge = new vdl.Type();
var _typenonce = new vdl.Type();
var _typepublicKeyDischarge = new vdl.Type();
var _typepublicKeyThirdPartyCaveatParam = new vdl.Type();
_type1.kind = vdl.kind.LIST;
_type1.name = "";
_type1.elem = _typeCaveat;
_type2.kind = vdl.kind.LIST;
_type2.name = "";
_type2.elem = vdl.types.BYTE;
_type3.kind = vdl.kind.LIST;
_type3.name = "";
_type3.elem = vdl.types.STRING;
_type4.kind = vdl.kind.LIST;
_type4.name = "";
_type4.elem = _typeBlessingPattern;
_type5.kind = vdl.kind.MAP;
_type5.name = "";
_type5.elem = _type2;
_type5.key = vdl.types.STRING;
_type6.kind = vdl.kind.LIST;
_type6.name = "";
_type6.elem = vdl.types.ANY;
_type7.kind = vdl.kind.LIST;
_type7.name = "";
_type7.elem = _type8;
_type8.kind = vdl.kind.LIST;
_type8.name = "";
_type8.elem = _typeCertificate;
_type9.kind = vdl.kind.LIST;
_type9.name = "";
_type9.elem = _typeRejectedBlessing;
_typeBlessingPattern.kind = vdl.kind.STRING;
_typeBlessingPattern.name = "v.io/v23/security.BlessingPattern";
_typeCaveat.kind = vdl.kind.STRUCT;
_typeCaveat.name = "v.io/v23/security.Caveat";
_typeCaveat.fields = [{name: "Id", type: new uniqueid.Id()._type}, {name: "ParamVom", type: _type2}];
_typeCaveatDescriptor.kind = vdl.kind.STRUCT;
_typeCaveatDescriptor.name = "v.io/v23/security.CaveatDescriptor";
_typeCaveatDescriptor.fields = [{name: "Id", type: new uniqueid.Id()._type}, {name: "ParamType", type: vdl.types.TYPEOBJECT}];
_typeCertificate.kind = vdl.kind.STRUCT;
_typeCertificate.name = "v.io/v23/security.Certificate";
_typeCertificate.fields = [{name: "Extension", type: vdl.types.STRING}, {name: "PublicKey", type: _type2}, {name: "Caveats", type: _type1}, {name: "Signature", type: _typeSignature}];
_typeCiphertext.kind = vdl.kind.STRUCT;
_typeCiphertext.name = "v.io/v23/security.Ciphertext";
_typeCiphertext.fields = [{name: "Scheme", type: vdl.types.INT32}, {name: "Ciphertexts", type: _type5}];
_typeDischargeImpetus.kind = vdl.kind.STRUCT;
_typeDischargeImpetus.name = "v.io/v23/security.DischargeImpetus";
_typeDischargeImpetus.fields = [{name: "Server", type: _type4}, {name: "Method", type: vdl.types.STRING}, {name: "Arguments", type: _type6}];
_typeHash.kind = vdl.kind.STRING;
_typeHash.name = "v.io/v23/security.Hash";
_typeRejectedBlessing.kind = vdl.kind.STRUCT;
_typeRejectedBlessing.name = "v.io/v23/security.RejectedBlessing";
_typeRejectedBlessing.fields = [{name: "Blessing", type: vdl.types.STRING}, {name: "Err", type: vdl.types.ERROR}];
_typeSignature.kind = vdl.kind.STRUCT;
_typeSignature.name = "v.io/v23/security.Signature";
_typeSignature.fields = [{name: "Purpose", type: _type2}, {name: "Hash", type: _typeHash}, {name: "R", type: _type2}, {name: "S", type: _type2}];
_typeThirdPartyRequirements.kind = vdl.kind.STRUCT;
_typeThirdPartyRequirements.name = "v.io/v23/security.ThirdPartyRequirements";
_typeThirdPartyRequirements.fields = [{name: "ReportServer", type: vdl.types.BOOL}, {name: "ReportMethod", type: vdl.types.BOOL}, {name: "ReportArguments", type: vdl.types.BOOL}];
_typeWireBlessings.kind = vdl.kind.STRUCT;
_typeWireBlessings.name = "v.io/v23/security.WireBlessings";
_typeWireBlessings.fields = [{name: "CertificateChains", type: _type7}];
_typeWireDischarge.kind = vdl.kind.UNION;
_typeWireDischarge.name = "v.io/v23/security.WireDischarge";
_typeWireDischarge.fields = [{name: "PublicKey", type: _typepublicKeyDischarge}];
_typenonce.kind = vdl.kind.ARRAY;
_typenonce.name = "v.io/v23/security.nonce";
_typenonce.len = 16;
_typenonce.elem = vdl.types.BYTE;
_typepublicKeyDischarge.kind = vdl.kind.STRUCT;
_typepublicKeyDischarge.name = "v.io/v23/security.publicKeyDischarge";
_typepublicKeyDischarge.fields = [{name: "ThirdPartyCaveatId", type: vdl.types.STRING}, {name: "Caveats", type: _type1}, {name: "Signature", type: _typeSignature}];
_typepublicKeyThirdPartyCaveatParam.kind = vdl.kind.STRUCT;
_typepublicKeyThirdPartyCaveatParam.name = "v.io/v23/security.publicKeyThirdPartyCaveatParam";
_typepublicKeyThirdPartyCaveatParam.fields = [{name: "Nonce", type: _typenonce}, {name: "Caveats", type: _type1}, {name: "DischargerKey", type: _type2}, {name: "DischargerLocation", type: vdl.types.STRING}, {name: "DischargerRequirements", type: _typeThirdPartyRequirements}];
_type1.freeze();
_type2.freeze();
_type3.freeze();
_type4.freeze();
_type5.freeze();
_type6.freeze();
_type7.freeze();
_type8.freeze();
_type9.freeze();
_typeBlessingPattern.freeze();
_typeCaveat.freeze();
_typeCaveatDescriptor.freeze();
_typeCertificate.freeze();
_typeCiphertext.freeze();
_typeDischargeImpetus.freeze();
_typeHash.freeze();
_typeRejectedBlessing.freeze();
_typeSignature.freeze();
_typeThirdPartyRequirements.freeze();
_typeWireBlessings.freeze();
_typeWireDischarge.freeze();
_typenonce.freeze();
_typepublicKeyDischarge.freeze();
_typepublicKeyThirdPartyCaveatParam.freeze();
module.exports.BlessingPattern = (vdl.registry.lookupOrCreateConstructor(_typeBlessingPattern));
module.exports.Caveat = (vdl.registry.lookupOrCreateConstructor(_typeCaveat));
module.exports.CaveatDescriptor = (vdl.registry.lookupOrCreateConstructor(_typeCaveatDescriptor));
module.exports.Certificate = (vdl.registry.lookupOrCreateConstructor(_typeCertificate));
module.exports.Ciphertext = (vdl.registry.lookupOrCreateConstructor(_typeCiphertext));
module.exports.DischargeImpetus = (vdl.registry.lookupOrCreateConstructor(_typeDischargeImpetus));
module.exports.Hash = (vdl.registry.lookupOrCreateConstructor(_typeHash));
module.exports.RejectedBlessing = (vdl.registry.lookupOrCreateConstructor(_typeRejectedBlessing));
module.exports.Signature = (vdl.registry.lookupOrCreateConstructor(_typeSignature));
module.exports.ThirdPartyRequirements = (vdl.registry.lookupOrCreateConstructor(_typeThirdPartyRequirements));
module.exports.WireBlessings = (vdl.registry.lookupOrCreateConstructor(_typeWireBlessings));
module.exports.WireDischarge = (vdl.registry.lookupOrCreateConstructor(_typeWireDischarge));
module.exports.nonce = (vdl.registry.lookupOrCreateConstructor(_typenonce));
module.exports.publicKeyDischarge = (vdl.registry.lookupOrCreateConstructor(_typepublicKeyDischarge));
module.exports.publicKeyThirdPartyCaveatParam = (vdl.registry.lookupOrCreateConstructor(_typepublicKeyThirdPartyCaveatParam));




// Consts:

  module.exports.ConstCaveat = canonicalize.reduce(new (vdl.registry.lookupOrCreateConstructor(_typeCaveatDescriptor))({
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
  'paramType': vdl.types.BOOL,
}, true), _typeCaveatDescriptor);

  module.exports.ExpiryCaveat = canonicalize.reduce(new (vdl.registry.lookupOrCreateConstructor(_typeCaveatDescriptor))({
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

  module.exports.MethodCaveat = canonicalize.reduce(new (vdl.registry.lookupOrCreateConstructor(_typeCaveatDescriptor))({
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

  module.exports.PublicKeyThirdPartyCaveat = canonicalize.reduce(new (vdl.registry.lookupOrCreateConstructor(_typeCaveatDescriptor))({
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
  'paramType': _typepublicKeyThirdPartyCaveatParam,
}, true), _typeCaveatDescriptor);

  module.exports.PeerBlessingsCaveat = canonicalize.reduce(new (vdl.registry.lookupOrCreateConstructor(_typeCaveatDescriptor))({
  'id': new Uint8Array([
5,
119,
248,
86,
76,
142,
95,
254,
255,
142,
43,
31,
77,
109,
128,
0,
]),
  'paramType': _type4,
}, true), _typeCaveatDescriptor);

  module.exports.NoExtension = canonicalize.reduce(new (vdl.registry.lookupOrCreateConstructor(_typeBlessingPattern))("$", true), _typeBlessingPattern);

  module.exports.AllPrincipals = canonicalize.reduce(new (vdl.registry.lookupOrCreateConstructor(_typeBlessingPattern))("...", true), _typeBlessingPattern);

  module.exports.ChainSeparator = canonicalize.reduce(new (vdl.registry.lookupOrCreateConstructor(vdl.types.STRING))("/", true), vdl.types.STRING);

  module.exports.SHA1Hash = canonicalize.reduce(new (vdl.registry.lookupOrCreateConstructor(_typeHash))("SHA1", true), _typeHash);

  module.exports.SHA256Hash = canonicalize.reduce(new (vdl.registry.lookupOrCreateConstructor(_typeHash))("SHA256", true), _typeHash);

  module.exports.SHA384Hash = canonicalize.reduce(new (vdl.registry.lookupOrCreateConstructor(_typeHash))("SHA384", true), _typeHash);

  module.exports.SHA512Hash = canonicalize.reduce(new (vdl.registry.lookupOrCreateConstructor(_typeHash))("SHA512", true), _typeHash);

  module.exports.SignatureForMessageSigning = canonicalize.reduce(new (vdl.registry.lookupOrCreateConstructor(vdl.types.STRING))("S1", true), vdl.types.STRING);

  module.exports.SignatureForBlessingCertificates = canonicalize.reduce(new (vdl.registry.lookupOrCreateConstructor(vdl.types.STRING))("B1", true), vdl.types.STRING);

  module.exports.SignatureForDischarge = canonicalize.reduce(new (vdl.registry.lookupOrCreateConstructor(vdl.types.STRING))("D1", true), vdl.types.STRING);

  module.exports.IBE = canonicalize.reduce(new (vdl.registry.lookupOrCreateConstructor(vdl.types.INT32))(1, true), vdl.types.INT32);



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
  vdl.types.TYPEOBJECT,
  vdl.types.TYPEOBJECT,
]);


module.exports.CaveatParamCodingError = makeError('v.io/v23/security.CaveatParamCoding', actions.NO_RETRY, {
  'en': '{1:}{2:} unable to encode/decode caveat param(type={4}) for caveat {3}: {5}',
}, [
  new uniqueid.Id()._type,
  vdl.types.TYPEOBJECT,
  vdl.types.ERROR,
]);


module.exports.CaveatValidationError = makeError('v.io/v23/security.CaveatValidation', actions.NO_RETRY, {
  'en': '{1:}{2:} caveat validation failed: {3}',
}, [
  vdl.types.ERROR,
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
  vdl.types.STRING,
  _type3,
]);


module.exports.PeerBlessingsCaveatValidationError = makeError('v.io/v23/security.PeerBlessingsCaveatValidation', actions.NO_RETRY, {
  'en': '{1:}{2:} patterns in peer blessings caveat {4} not matched by the peer {3}',
}, [
  _type3,
  _type4,
]);


module.exports.UnrecognizedRootError = makeError('v.io/v23/security.UnrecognizedRoot', actions.NO_RETRY, {
  'en': '{1:}{2:} unrecognized public key {3} in root certificate{:4}',
}, [
  vdl.types.STRING,
  vdl.types.ERROR,
]);


module.exports.AuthorizationFailedError = makeError('v.io/v23/security.AuthorizationFailed', actions.NO_RETRY, {
  'en': '{1:}{2:} principal with blessings {3} (rejected {4}) is not authorized by principal with blessings {5}',
}, [
  _type3,
  _type9,
  _type3,
]);


module.exports.InvalidSigningBlessingCaveatError = makeError('v.io/v23/security.InvalidSigningBlessingCaveat', actions.NO_RETRY, {
  'en': '{1:}{2:} blessing has caveat with UUID {3} which makes it unsuitable for signing -- please use blessings with just Expiry caveats',
}, [
  new uniqueid.Id()._type,
]);


module.exports.PublicKeyNotAllowedError = makeError('v.io/v23/security.PublicKeyNotAllowed', actions.NO_RETRY, {
  'en': '{1:}{2:} peer has public key {3}, not the authorized public key {4}',
}, [
  vdl.types.STRING,
  vdl.types.STRING,
]);


module.exports.EndpointAuthorizationFailedError = makeError('v.io/v23/security.EndpointAuthorizationFailed', actions.NO_RETRY, {
  'en': '{1:}{2:} blessings in endpoint {3} not matched by blessings presented: {4} (rejected {5})',
}, [
  vdl.types.STRING,
  _type3,
  _type9,
]);




// Services:

   

   
 


