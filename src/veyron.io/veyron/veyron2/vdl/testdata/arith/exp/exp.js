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
var _typeerror = new Type();
_type1.kind = Kind.NILABLE;
_type1.name = "";
_type1.elem = _typeerror;
_type2.kind = Kind.STRUCT;
_type2.name = "";
_type2.fields = [{name: "ID", type: Types.STRING}, {name: "Action", type: Types.UINT32}];
_type3.kind = Kind.LIST;
_type3.name = "";
_type3.elem = Types.ANY;
_typeerror.kind = Kind.STRUCT;
_typeerror.name = "error";
_typeerror.fields = [{name: "IDAction", type: _type2}, {name: "Msg", type: Types.STRING}, {name: "ParamList", type: _type3}];
types.error = Registry.lookupOrCreateConstructor(_typeerror, "error");



var consts = { 
};


function NotImplementedMethod(name) {
  throw new Error('Method ' + name + ' not implemented');
}


var services = {
package: 'v.io/core/veyron2/vdl/testdata/arith/exp',
  Exp: {
    Exp: {
    numInArgs: 1,
    numOutArgs: 1,
    inputStreaming: false,
    outputStreaming: false,
    tags: []
},

},

};


var serviceDefs = {
  package: 'v.io/core/veyron2/vdl/testdata/arith/exp',

  
  Exp: Exp,
  

};



  
    
function Exp(){}
    
      
Exp.prototype.Exp = NotImplementedMethod;
    
    
Exp.prototype.signature = function ExpSignature() {
  return _ExpSignature;
};
    
var _ExpSignature = {
  name: 'Exp',
  pkgPath: 'v.io/core/veyron2/vdl/testdata/arith/exp',
  doc: "",
  embeds: [],
  methods: [
    
      
    {
    name: 'Exp',
    doc: "",
    inArgs: [{
      name: 'x',
      doc: "",
      type: Types.FLOAT64
    },
    ],
    outArgs: [{
      name: '',
      doc: "",
      type: Types.FLOAT64
    },
    {
      name: '',
      doc: "",
      type: _type1
    },
    ],
    inStream: null,
    outStream: null,
    tags: []
  },
    
  ]
};
  


module.exports = {
  types: types,
  serviceDefs: serviceDefs,
  services: services,
  consts: consts,
};
