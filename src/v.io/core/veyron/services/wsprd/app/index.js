// This file was auto-generated by the vanadium vdl tool.
var vdl = require('../../../../../.././vdl');





var signature = require('./../../../../../v23/vdlroot/signature');
var time = require('./../../../../../v23/vdlroot/time');
var security = require('./../../../../../v23/security');
var vtrace = require('./../../../../../v23/vtrace');

module.exports = {};



// Types:
var _type1 = new vdl.Type();
var _type10 = new vdl.Type();
var _type11 = new vdl.Type();
var _type2 = new vdl.Type();
var _type3 = new vdl.Type();
var _type4 = new vdl.Type();
var _type5 = new vdl.Type();
var _type6 = new vdl.Type();
var _type7 = new vdl.Type();
var _type8 = new vdl.Type();
var _type9 = new vdl.Type();
var _typeVeyronRPCRequest = new vdl.Type();
var _typeVeyronRPCResponse = new vdl.Type();
_type1.kind = vdl.Kind.LIST;
_type1.name = "";
_type1.elem = vdl.Types.ANY;
_type10.kind = vdl.Kind.LIST;
_type10.name = "";
_type10.elem = new signature.Arg()._type;
_type11.kind = vdl.Kind.OPTIONAL;
_type11.name = "";
_type11.elem = new signature.Arg()._type;
_type2.kind = vdl.Kind.LIST;
_type2.name = "";
_type2.elem = new vtrace.SpanRecord()._type;
_type3.kind = vdl.Kind.LIST;
_type3.name = "";
_type3.elem = new vtrace.Annotation()._type;
_type4.kind = vdl.Kind.LIST;
_type4.name = "";
_type4.elem = new security.Caveat()._type;
_type5.kind = vdl.Kind.LIST;
_type5.name = "";
_type5.elem = vdl.Types.BYTE;
_type6.kind = vdl.Kind.LIST;
_type6.name = "";
_type6.elem = vdl.Types.STRING;
_type7.kind = vdl.Kind.LIST;
_type7.name = "";
_type7.elem = new signature.Interface()._type;
_type8.kind = vdl.Kind.LIST;
_type8.name = "";
_type8.elem = new signature.Embed()._type;
_type9.kind = vdl.Kind.LIST;
_type9.name = "";
_type9.elem = new signature.Method()._type;
_typeVeyronRPCRequest.kind = vdl.Kind.STRUCT;
_typeVeyronRPCRequest.name = "v.io/core/veyron/services/wsprd/app.VeyronRPCRequest";
_typeVeyronRPCRequest.fields = [{name: "Name", type: vdl.Types.STRING}, {name: "Method", type: vdl.Types.STRING}, {name: "NumInArgs", type: vdl.Types.INT32}, {name: "NumOutArgs", type: vdl.Types.INT32}, {name: "IsStreaming", type: vdl.Types.BOOL}, {name: "Timeout", type: vdl.Types.INT64}, {name: "TraceRequest", type: new vtrace.Request()._type}];
_typeVeyronRPCResponse.kind = vdl.Kind.STRUCT;
_typeVeyronRPCResponse.name = "v.io/core/veyron/services/wsprd/app.VeyronRPCResponse";
_typeVeyronRPCResponse.fields = [{name: "OutArgs", type: _type1}, {name: "TraceResponse", type: new vtrace.Response()._type}];
_type1.freeze();
_type10.freeze();
_type11.freeze();
_type2.freeze();
_type3.freeze();
_type4.freeze();
_type5.freeze();
_type6.freeze();
_type7.freeze();
_type8.freeze();
_type9.freeze();
_typeVeyronRPCRequest.freeze();
_typeVeyronRPCResponse.freeze();
module.exports.VeyronRPCRequest = (vdl.Registry.lookupOrCreateConstructor(_typeVeyronRPCRequest));
module.exports.VeyronRPCResponse = (vdl.Registry.lookupOrCreateConstructor(_typeVeyronRPCResponse));




// Consts:



// Errors:



// Services:

   

  
    
function Controller(){}
module.exports.Controller = Controller

    
      
Controller.prototype.serve = function(ctx, name, serverId) {
  throw new Error('Method Serve not implemented');
};
    
      
Controller.prototype.stop = function(ctx, serverId) {
  throw new Error('Method Stop not implemented');
};
    
      
Controller.prototype.addName = function(ctx, serverId, name) {
  throw new Error('Method AddName not implemented');
};
    
      
Controller.prototype.removeName = function(ctx, serverId, name) {
  throw new Error('Method RemoveName not implemented');
};
    
      
Controller.prototype.unlinkJSBlessings = function(ctx, handle) {
  throw new Error('Method UnlinkJSBlessings not implemented');
};
    
      
Controller.prototype.blessPublicKey = function(ctx, fromHandle, caveats, durationMs, extension) {
  throw new Error('Method BlessPublicKey not implemented');
};
    
      
Controller.prototype.createBlessings = function(ctx, extension) {
  throw new Error('Method CreateBlessings not implemented');
};
    
      
Controller.prototype.remoteBlessings = function(ctx, name, method) {
  throw new Error('Method RemoteBlessings not implemented');
};
    
      
Controller.prototype.signature = function(ctx, name) {
  throw new Error('Method Signature not implemented');
};
     

    
Controller.prototype._serviceDescription = {
  name: 'Controller',
  pkgPath: 'v.io/core/veyron/services/wsprd/app',
  doc: "",
  embeds: [],
  methods: [
    
      
    {
    name: 'Serve',
    doc: "// Serve instructs WSPR to start listening for calls on behalf\n// of a javascript server.",
    inArgs: [{
      name: 'name',
      doc: "",
      type: vdl.Types.STRING
    },
    {
      name: 'serverId',
      doc: "",
      type: vdl.Types.UINT32
    },
    ],
    outArgs: [],
    inStream: null,
    outStream: null,
    tags: []
  },
    
      
    {
    name: 'Stop',
    doc: "// Stop instructs WSPR to stop listening for calls for the\n// given javascript server.",
    inArgs: [{
      name: 'serverId',
      doc: "",
      type: vdl.Types.UINT32
    },
    ],
    outArgs: [],
    inStream: null,
    outStream: null,
    tags: []
  },
    
      
    {
    name: 'AddName',
    doc: "// AddName adds a published name to an existing server.",
    inArgs: [{
      name: 'serverId',
      doc: "",
      type: vdl.Types.UINT32
    },
    {
      name: 'name',
      doc: "",
      type: vdl.Types.STRING
    },
    ],
    outArgs: [],
    inStream: null,
    outStream: null,
    tags: []
  },
    
      
    {
    name: 'RemoveName',
    doc: "// RemoveName removes a published name from an existing server.",
    inArgs: [{
      name: 'serverId',
      doc: "",
      type: vdl.Types.UINT32
    },
    {
      name: 'name',
      doc: "",
      type: vdl.Types.STRING
    },
    ],
    outArgs: [],
    inStream: null,
    outStream: null,
    tags: []
  },
    
      
    {
    name: 'UnlinkJSBlessings',
    doc: "// UnlinkJSBlessings removes the given blessings from the blessings store.",
    inArgs: [{
      name: 'handle',
      doc: "",
      type: vdl.Types.INT32
    },
    ],
    outArgs: [],
    inStream: null,
    outStream: null,
    tags: []
  },
    
      
    {
    name: 'BlessPublicKey',
    doc: "// BlessPublicKey creates a new blessing.",
    inArgs: [{
      name: 'fromHandle',
      doc: "",
      type: vdl.Types.INT32
    },
    {
      name: 'caveats',
      doc: "",
      type: _type4
    },
    {
      name: 'durationMs',
      doc: "",
      type: new time.Duration()._type
    },
    {
      name: 'extension',
      doc: "",
      type: vdl.Types.STRING
    },
    ],
    outArgs: [{
      name: 'handle',
      doc: "",
      type: vdl.Types.INT32
    },
    {
      name: 'publicKey',
      doc: "",
      type: vdl.Types.STRING
    },
    ],
    inStream: null,
    outStream: null,
    tags: []
  },
    
      
    {
    name: 'CreateBlessings',
    doc: "// CreateBlessings creates a new principal self-blessed with the given extension.",
    inArgs: [{
      name: 'extension',
      doc: "",
      type: vdl.Types.STRING
    },
    ],
    outArgs: [{
      name: 'handle',
      doc: "",
      type: vdl.Types.INT32
    },
    {
      name: 'publicKey',
      doc: "",
      type: vdl.Types.STRING
    },
    ],
    inStream: null,
    outStream: null,
    tags: []
  },
    
      
    {
    name: 'RemoteBlessings',
    doc: "// RemoteBlessings fetches the remote blessings for a given name and method.",
    inArgs: [{
      name: 'name',
      doc: "",
      type: vdl.Types.STRING
    },
    {
      name: 'method',
      doc: "",
      type: vdl.Types.STRING
    },
    ],
    outArgs: [{
      name: '',
      doc: "",
      type: _type6
    },
    ],
    inStream: null,
    outStream: null,
    tags: []
  },
    
      
    {
    name: 'Signature',
    doc: "// Signature fetches the signature for a given name.",
    inArgs: [{
      name: 'name',
      doc: "",
      type: vdl.Types.STRING
    },
    ],
    outArgs: [{
      name: '',
      doc: "",
      type: _type7
    },
    ],
    inStream: null,
    outStream: null,
    tags: []
  },
     
  ]
};

   
 


