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




var exp = require('./exp/exp');
var base = require('./../base/base');

module.exports = {};



// Types:
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
module.exports.error = Registry.lookupOrCreateConstructor(_typeerror, "error");




// Consts:

  module.exports.Yes = new (Registry.lookupOrCreateConstructor(Types.BOOL))(true);

  module.exports.No = new (Registry.lookupOrCreateConstructor(Types.BOOL))(false);

  module.exports.Hello = new (Registry.lookupOrCreateConstructor(Types.STRING))("hello");

  module.exports.Int32Const = new (Registry.lookupOrCreateConstructor(Types.INT32))(123);

  module.exports.Int64Const = new (Registry.lookupOrCreateConstructor(Types.INT64))(new BigInt(1, new Uint8Array([0x80])));

  module.exports.FloatConst = new (Registry.lookupOrCreateConstructor(Types.FLOAT64))(2);

  module.exports.Mask = new (Registry.lookupOrCreateConstructor(Types.UINT64))(new BigInt(1, new Uint8Array([0x1, 0x0])));




function NotImplementedMethod(name) {
  throw new Error('Method ' + name + ' not implemented');
}


// Services:

  
    
function Trigonometry(){}
module.exports.Trigonometry = Trigonometry

    
      
Trigonometry.prototype.Sine = NotImplementedMethod;
    
      
Trigonometry.prototype.Cosine = NotImplementedMethod;
     

    
Trigonometry.prototype._serviceDescription = {
  name: 'Trigonometry',
  pkgPath: 'v.io/core/veyron2/vdl/testdata/arith',
  doc: "// Trigonometry is an interface that specifies a couple trigonometric functions.",
  embeds: [],
  methods: [
    
      
    {
    name: 'Sine',
    doc: "",
    inArgs: [{
      name: 'angle',
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
    
      
    {
    name: 'Cosine',
    doc: "",
    inArgs: [{
      name: 'angle',
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

  
    
function AdvancedMath(){}
module.exports.AdvancedMath = AdvancedMath

    
      
AdvancedMath.prototype.Sine = NotImplementedMethod;
    
      
AdvancedMath.prototype.Cosine = NotImplementedMethod;
    
      
AdvancedMath.prototype.Exp = NotImplementedMethod;
     

    
AdvancedMath.prototype._serviceDescription = {
  name: 'AdvancedMath',
  pkgPath: 'v.io/core/veyron2/vdl/testdata/arith',
  doc: "// AdvancedMath is an interface for more advanced math than arith.  It embeds\n// interfaces defined both in the same file and in an external package; and in\n// turn it is embedded by arith.Calculator (which is in the same package but\n// different file) to verify that embedding works in all these scenarios.",
  embeds: [{
      name: 'Trigonometry',
      pkgPath: 'v.io/core/veyron2/vdl/testdata/arith',
      doc: "// Trigonometry is an interface that specifies a couple trigonometric functions."
    },
    {
      name: 'Exp',
      pkgPath: 'v.io/core/veyron2/vdl/testdata/arith/exp',
      doc: ""
    },
    ],
  methods: [
    
      
    {
    name: 'Sine',
    doc: "",
    inArgs: [{
      name: 'angle',
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
    
      
    {
    name: 'Cosine',
    doc: "",
    inArgs: [{
      name: 'angle',
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

   

  
    
function Arith(){}
module.exports.Arith = Arith

    
      
Arith.prototype.Add = NotImplementedMethod;
    
      
Arith.prototype.DivMod = NotImplementedMethod;
    
      
Arith.prototype.Sub = NotImplementedMethod;
    
      
Arith.prototype.Mul = NotImplementedMethod;
    
      
Arith.prototype.GenError = NotImplementedMethod;
    
      
Arith.prototype.Count = NotImplementedMethod;
    
      
Arith.prototype.StreamingAdd = NotImplementedMethod;
    
      
Arith.prototype.QuoteAny = NotImplementedMethod;
     

    
Arith.prototype._serviceDescription = {
  name: 'Arith',
  pkgPath: 'v.io/core/veyron2/vdl/testdata/arith',
  doc: "// Arith is an example of an interface definition for an arithmetic service.\n// Things to note:\n//   * There must be at least 1 out-arg, and the last out-arg must be error.",
  embeds: [],
  methods: [
    
      
    {
    name: 'Add',
    doc: "// Add is a typical method with multiple input and output arguments.",
    inArgs: [{
      name: 'a',
      doc: "",
      type: Types.INT32
    },
    {
      name: 'b',
      doc: "",
      type: Types.INT32
    },
    ],
    outArgs: [{
      name: '',
      doc: "",
      type: Types.INT32
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
    
      
    {
    name: 'DivMod',
    doc: "// DivMod shows that runs of args with the same type can use the short form,\n// just like Go.",
    inArgs: [{
      name: 'a',
      doc: "",
      type: Types.INT32
    },
    {
      name: 'b',
      doc: "",
      type: Types.INT32
    },
    ],
    outArgs: [{
      name: 'quot',
      doc: "",
      type: Types.INT32
    },
    {
      name: 'rem',
      doc: "",
      type: Types.INT32
    },
    {
      name: 'err',
      doc: "",
      type: _type1
    },
    ],
    inStream: null,
    outStream: null,
    tags: []
  },
    
      
    {
    name: 'Sub',
    doc: "// Sub shows that you can use data types defined in other packages.",
    inArgs: [{
      name: 'args',
      doc: "",
      type: base.Args
    },
    ],
    outArgs: [{
      name: '',
      doc: "",
      type: Types.INT32
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
    
      
    {
    name: 'Mul',
    doc: "// Mul tries another data type defined in another package.",
    inArgs: [{
      name: 'nested',
      doc: "",
      type: base.NestedArgs
    },
    ],
    outArgs: [{
      name: '',
      doc: "",
      type: Types.INT32
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
    
      
    {
    name: 'GenError',
    doc: "// GenError shows that it's fine to have no in args, and no out args other\n// than \"error\".  In addition GenError shows the usage of tags.  Tags are a\n// sequence of constants.  There's no requirement on uniqueness of types or\n// values, and regular const expressions may also be used.",
    inArgs: [],
    outArgs: [{
      name: '',
      doc: "",
      type: _type1
    },
    ],
    inStream: null,
    outStream: null,
    tags: [new (Registry.lookupOrCreateConstructor(Types.STRING))("foo"), new (Registry.lookupOrCreateConstructor(Types.STRING))("barz"), new (Registry.lookupOrCreateConstructor(Types.STRING))("hello"), new (Registry.lookupOrCreateConstructor(Types.INT32))(129), new (Registry.lookupOrCreateConstructor(Types.UINT64))(new BigInt(1, new Uint8Array([0x24]))), ]
  },
    
      
    {
    name: 'Count',
    doc: "// Count shows using only an int32 out-stream type, with no in-stream type.",
    inArgs: [{
      name: 'start',
      doc: "",
      type: Types.INT32
    },
    ],
    outArgs: [{
      name: '',
      doc: "",
      type: _type1
    },
    ],
    inStream: null,
    outStream: {
      name: '',
      doc: '',
      type: Types.INT32
    },
    tags: []
  },
    
      
    {
    name: 'StreamingAdd',
    doc: "// StreamingAdd shows a bidirectional stream.",
    inArgs: [],
    outArgs: [{
      name: 'total',
      doc: "",
      type: Types.INT32
    },
    {
      name: 'err',
      doc: "",
      type: _type1
    },
    ],
    inStream: {
      name: '',
      doc: '',
      type: Types.INT32
    },
    outStream: {
      name: '',
      doc: '',
      type: Types.INT32
    },
    tags: []
  },
    
      
    {
    name: 'QuoteAny',
    doc: "// QuoteAny shows the any built-in type, representing a value of any type.",
    inArgs: [{
      name: 'a',
      doc: "",
      type: Types.ANY
    },
    ],
    outArgs: [{
      name: '',
      doc: "",
      type: Types.ANY
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

  
    
function Calculator(){}
module.exports.Calculator = Calculator

    
      
Calculator.prototype.On = NotImplementedMethod;
    
      
Calculator.prototype.Off = NotImplementedMethod;
    
      
Calculator.prototype.Add = NotImplementedMethod;
    
      
Calculator.prototype.DivMod = NotImplementedMethod;
    
      
Calculator.prototype.Sub = NotImplementedMethod;
    
      
Calculator.prototype.Mul = NotImplementedMethod;
    
      
Calculator.prototype.GenError = NotImplementedMethod;
    
      
Calculator.prototype.Count = NotImplementedMethod;
    
      
Calculator.prototype.StreamingAdd = NotImplementedMethod;
    
      
Calculator.prototype.QuoteAny = NotImplementedMethod;
    
      
Calculator.prototype.Sine = NotImplementedMethod;
    
      
Calculator.prototype.Cosine = NotImplementedMethod;
    
      
Calculator.prototype.Exp = NotImplementedMethod;
     

    
Calculator.prototype._serviceDescription = {
  name: 'Calculator',
  pkgPath: 'v.io/core/veyron2/vdl/testdata/arith',
  doc: "",
  embeds: [{
      name: 'Arith',
      pkgPath: 'v.io/core/veyron2/vdl/testdata/arith',
      doc: "// Arith is an example of an interface definition for an arithmetic service.\n// Things to note:\n//   * There must be at least 1 out-arg, and the last out-arg must be error."
    },
    {
      name: 'AdvancedMath',
      pkgPath: 'v.io/core/veyron2/vdl/testdata/arith',
      doc: "// AdvancedMath is an interface for more advanced math than arith.  It embeds\n// interfaces defined both in the same file and in an external package; and in\n// turn it is embedded by arith.Calculator (which is in the same package but\n// different file) to verify that embedding works in all these scenarios."
    },
    ],
  methods: [
    
      
    {
    name: 'On',
    doc: "",
    inArgs: [],
    outArgs: [{
      name: '',
      doc: "",
      type: _type1
    },
    ],
    inStream: null,
    outStream: null,
    tags: []
  },
    
      
    {
    name: 'Off',
    doc: "",
    inArgs: [],
    outArgs: [{
      name: '',
      doc: "",
      type: _type1
    },
    ],
    inStream: null,
    outStream: null,
    tags: [new (Registry.lookupOrCreateConstructor(Types.STRING))("offtag"), ]
  },
    
      
    {
    name: 'Add',
    doc: "// Add is a typical method with multiple input and output arguments.",
    inArgs: [{
      name: 'a',
      doc: "",
      type: Types.INT32
    },
    {
      name: 'b',
      doc: "",
      type: Types.INT32
    },
    ],
    outArgs: [{
      name: '',
      doc: "",
      type: Types.INT32
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
    
      
    {
    name: 'DivMod',
    doc: "// DivMod shows that runs of args with the same type can use the short form,\n// just like Go.",
    inArgs: [{
      name: 'a',
      doc: "",
      type: Types.INT32
    },
    {
      name: 'b',
      doc: "",
      type: Types.INT32
    },
    ],
    outArgs: [{
      name: 'quot',
      doc: "",
      type: Types.INT32
    },
    {
      name: 'rem',
      doc: "",
      type: Types.INT32
    },
    {
      name: 'err',
      doc: "",
      type: _type1
    },
    ],
    inStream: null,
    outStream: null,
    tags: []
  },
    
      
    {
    name: 'Sub',
    doc: "// Sub shows that you can use data types defined in other packages.",
    inArgs: [{
      name: 'args',
      doc: "",
      type: base.Args
    },
    ],
    outArgs: [{
      name: '',
      doc: "",
      type: Types.INT32
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
    
      
    {
    name: 'Mul',
    doc: "// Mul tries another data type defined in another package.",
    inArgs: [{
      name: 'nested',
      doc: "",
      type: base.NestedArgs
    },
    ],
    outArgs: [{
      name: '',
      doc: "",
      type: Types.INT32
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
    
      
    {
    name: 'GenError',
    doc: "// GenError shows that it's fine to have no in args, and no out args other\n// than \"error\".  In addition GenError shows the usage of tags.  Tags are a\n// sequence of constants.  There's no requirement on uniqueness of types or\n// values, and regular const expressions may also be used.",
    inArgs: [],
    outArgs: [{
      name: '',
      doc: "",
      type: _type1
    },
    ],
    inStream: null,
    outStream: null,
    tags: [new (Registry.lookupOrCreateConstructor(Types.STRING))("foo"), new (Registry.lookupOrCreateConstructor(Types.STRING))("barz"), new (Registry.lookupOrCreateConstructor(Types.STRING))("hello"), new (Registry.lookupOrCreateConstructor(Types.INT32))(129), new (Registry.lookupOrCreateConstructor(Types.UINT64))(new BigInt(1, new Uint8Array([0x24]))), ]
  },
    
      
    {
    name: 'Count',
    doc: "// Count shows using only an int32 out-stream type, with no in-stream type.",
    inArgs: [{
      name: 'start',
      doc: "",
      type: Types.INT32
    },
    ],
    outArgs: [{
      name: '',
      doc: "",
      type: _type1
    },
    ],
    inStream: null,
    outStream: {
      name: '',
      doc: '',
      type: Types.INT32
    },
    tags: []
  },
    
      
    {
    name: 'StreamingAdd',
    doc: "// StreamingAdd shows a bidirectional stream.",
    inArgs: [],
    outArgs: [{
      name: 'total',
      doc: "",
      type: Types.INT32
    },
    {
      name: 'err',
      doc: "",
      type: _type1
    },
    ],
    inStream: {
      name: '',
      doc: '',
      type: Types.INT32
    },
    outStream: {
      name: '',
      doc: '',
      type: Types.INT32
    },
    tags: []
  },
    
      
    {
    name: 'QuoteAny',
    doc: "// QuoteAny shows the any built-in type, representing a value of any type.",
    inArgs: [{
      name: 'a',
      doc: "",
      type: Types.ANY
    },
    ],
    outArgs: [{
      name: '',
      doc: "",
      type: Types.ANY
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
    
      
    {
    name: 'Sine',
    doc: "",
    inArgs: [{
      name: 'angle',
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
    
      
    {
    name: 'Cosine',
    doc: "",
    inArgs: [{
      name: 'angle',
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

   
 


