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





module.exports = {};



// Types:
var _typeDuration = new Type();
var _typeTime = new Type();
_typeDuration.kind = Kind.STRUCT;
_typeDuration.name = "time.Duration";
_typeDuration.fields = [{name: "Seconds", type: Types.INT64}, {name: "Nano", type: Types.INT32}];
_typeTime.kind = Kind.STRUCT;
_typeTime.name = "time.Time";
_typeTime.fields = [{name: "Seconds", type: Types.INT64}, {name: "Nano", type: Types.INT32}];
module.exports.Duration = Registry.lookupOrCreateConstructor(_typeDuration, "Duration");
module.exports.Time = Registry.lookupOrCreateConstructor(_typeTime, "Time");




// Consts:




function NotImplementedMethod(name) {
  throw new Error('Method ' + name + ' not implemented');
}


// Services:

   
 


