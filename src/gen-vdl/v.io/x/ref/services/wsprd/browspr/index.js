// This file was auto-generated by the vanadium vdl tool.
var vdl = require('../../../../../../../vdl');





var identity = require('./../../identity');
var account = require('./../account');

module.exports = {};



// Types:
var _type1 = new vdl.Type();
var _type2 = new vdl.Type();
var _typeAssociateAccountMessage = new vdl.Type();
var _typeCleanupMessage = new vdl.Type();
var _typeCreateAccountMessage = new vdl.Type();
var _typeCreateInstanceMessage = new vdl.Type();
var _typeGetAccountsMessage = new vdl.Type();
var _typeOriginHasAccountMessage = new vdl.Type();
var _typeStartMessage = new vdl.Type();
_type1.kind = vdl.Kind.LIST;
_type1.name = "";
_type1.elem = new account.Caveat()._type;
_type2.kind = vdl.Kind.LIST;
_type2.name = "";
_type2.elem = vdl.Types.STRING;
_typeAssociateAccountMessage.kind = vdl.Kind.STRUCT;
_typeAssociateAccountMessage.name = "v.io/x/ref/services/wsprd/browspr.AssociateAccountMessage";
_typeAssociateAccountMessage.fields = [{name: "Account", type: vdl.Types.STRING}, {name: "Origin", type: vdl.Types.STRING}, {name: "Caveats", type: _type1}];
_typeCleanupMessage.kind = vdl.Kind.STRUCT;
_typeCleanupMessage.name = "v.io/x/ref/services/wsprd/browspr.CleanupMessage";
_typeCleanupMessage.fields = [{name: "InstanceId", type: vdl.Types.INT32}];
_typeCreateAccountMessage.kind = vdl.Kind.STRUCT;
_typeCreateAccountMessage.name = "v.io/x/ref/services/wsprd/browspr.CreateAccountMessage";
_typeCreateAccountMessage.fields = [{name: "Token", type: vdl.Types.STRING}];
_typeCreateInstanceMessage.kind = vdl.Kind.STRUCT;
_typeCreateInstanceMessage.name = "v.io/x/ref/services/wsprd/browspr.CreateInstanceMessage";
_typeCreateInstanceMessage.fields = [{name: "InstanceId", type: vdl.Types.INT32}, {name: "Origin", type: vdl.Types.STRING}, {name: "NamespaceRoots", type: _type2}, {name: "Proxy", type: vdl.Types.STRING}];
_typeGetAccountsMessage.kind = vdl.Kind.STRUCT;
_typeGetAccountsMessage.name = "v.io/x/ref/services/wsprd/browspr.GetAccountsMessage";
_typeGetAccountsMessage.fields = [];
_typeOriginHasAccountMessage.kind = vdl.Kind.STRUCT;
_typeOriginHasAccountMessage.name = "v.io/x/ref/services/wsprd/browspr.OriginHasAccountMessage";
_typeOriginHasAccountMessage.fields = [{name: "Origin", type: vdl.Types.STRING}];
_typeStartMessage.kind = vdl.Kind.STRUCT;
_typeStartMessage.name = "v.io/x/ref/services/wsprd/browspr.StartMessage";
_typeStartMessage.fields = [{name: "Identityd", type: vdl.Types.STRING}, {name: "IdentitydBlessingRoot", type: new identity.BlessingRootResponse()._type}, {name: "Proxy", type: vdl.Types.STRING}, {name: "NamespaceRoot", type: vdl.Types.STRING}, {name: "LogLevel", type: vdl.Types.INT32}, {name: "LogModule", type: vdl.Types.STRING}];
_type1.freeze();
_type2.freeze();
_typeAssociateAccountMessage.freeze();
_typeCleanupMessage.freeze();
_typeCreateAccountMessage.freeze();
_typeCreateInstanceMessage.freeze();
_typeGetAccountsMessage.freeze();
_typeOriginHasAccountMessage.freeze();
_typeStartMessage.freeze();
module.exports.AssociateAccountMessage = (vdl.Registry.lookupOrCreateConstructor(_typeAssociateAccountMessage));
module.exports.CleanupMessage = (vdl.Registry.lookupOrCreateConstructor(_typeCleanupMessage));
module.exports.CreateAccountMessage = (vdl.Registry.lookupOrCreateConstructor(_typeCreateAccountMessage));
module.exports.CreateInstanceMessage = (vdl.Registry.lookupOrCreateConstructor(_typeCreateInstanceMessage));
module.exports.GetAccountsMessage = (vdl.Registry.lookupOrCreateConstructor(_typeGetAccountsMessage));
module.exports.OriginHasAccountMessage = (vdl.Registry.lookupOrCreateConstructor(_typeOriginHasAccountMessage));
module.exports.StartMessage = (vdl.Registry.lookupOrCreateConstructor(_typeStartMessage));




// Consts:



// Errors:



// Services:

   
 


