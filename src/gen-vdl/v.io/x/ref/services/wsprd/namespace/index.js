// This file was auto-generated by the vanadium vdl tool.
var vdl = require('../../../../../../../vdl');





var time = require('./../../../../../v23/vdlroot/time');
var naming = require('./../../../../../v23/naming');
var access = require('./../../../../../v23/services/security/access');

module.exports = {};



// Types:
var _type1 = new vdl.Type();
_type1.kind = vdl.Kind.LIST;
_type1.name = "";
_type1.elem = vdl.Types.STRING;
_type1.freeze();




// Consts:



// Errors:



// Services:

  
    
function Namespace(){}
module.exports.Namespace = Namespace

    
      
Namespace.prototype.glob = function(ctx, pattern) {
  throw new Error('Method Glob not implemented');
};
    
      
Namespace.prototype.mount = function(ctx, name, server, ttl, replace) {
  throw new Error('Method Mount not implemented');
};
    
      
Namespace.prototype.unmount = function(ctx, name, server) {
  throw new Error('Method Unmount not implemented');
};
    
      
Namespace.prototype.resolve = function(ctx, name) {
  throw new Error('Method Resolve not implemented');
};
    
      
Namespace.prototype.resolveToMT = function(ctx, name) {
  throw new Error('Method ResolveToMT not implemented');
};
    
      
Namespace.prototype.flushCacheEntry = function(ctx, name) {
  throw new Error('Method FlushCacheEntry not implemented');
};
    
      
Namespace.prototype.disableCache = function(ctx, disable) {
  throw new Error('Method DisableCache not implemented');
};
    
      
Namespace.prototype.roots = function(ctx) {
  throw new Error('Method Roots not implemented');
};
    
      
Namespace.prototype.setRoots = function(ctx, roots) {
  throw new Error('Method SetRoots not implemented');
};
    
      
Namespace.prototype.setPermissions = function(ctx, name, acl, etag) {
  throw new Error('Method SetPermissions not implemented');
};
    
      
Namespace.prototype.getPermissions = function(ctx, name) {
  throw new Error('Method GetPermissions not implemented');
};
    
      
Namespace.prototype.delete = function(ctx, name, deleteSubtree) {
  throw new Error('Method Delete not implemented');
};
     

    
Namespace.prototype._serviceDescription = {
  name: 'Namespace',
  pkgPath: 'v.io/x/ref/services/wsprd/namespace',
  doc: "",
  embeds: [],
  methods: [
    
      
    {
    name: 'Glob',
    doc: "// Run a glob query and stream the results.",
    inArgs: [{
      name: 'pattern',
      doc: "",
      type: vdl.Types.STRING
    },
    ],
    outArgs: [],
    inStream: null,
    outStream: {
      name: '',
      doc: '',
      type: new naming.VDLGlobReply()._type
    },
    tags: []
  },
    
      
    {
    name: 'Mount',
    doc: "// Mount mounts a server under the given name.",
    inArgs: [{
      name: 'name',
      doc: "",
      type: vdl.Types.STRING
    },
    {
      name: 'server',
      doc: "",
      type: vdl.Types.STRING
    },
    {
      name: 'ttl',
      doc: "",
      type: new time.Duration()._type
    },
    {
      name: 'replace',
      doc: "",
      type: vdl.Types.BOOL
    },
    ],
    outArgs: [],
    inStream: null,
    outStream: null,
    tags: []
  },
    
      
    {
    name: 'Unmount',
    doc: "// Unmount removes an existing mount point.",
    inArgs: [{
      name: 'name',
      doc: "",
      type: vdl.Types.STRING
    },
    {
      name: 'server',
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
    name: 'Resolve',
    doc: "// Resolve resolves a name to an address.",
    inArgs: [{
      name: 'name',
      doc: "",
      type: vdl.Types.STRING
    },
    ],
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
    name: 'ResolveToMT',
    doc: "// ResolveToMt resolves a name to the address of the mounttable directly\n// hosting it.",
    inArgs: [{
      name: 'name',
      doc: "",
      type: vdl.Types.STRING
    },
    ],
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
    name: 'FlushCacheEntry',
    doc: "// FlushCacheEntry removes the namespace cache entry for a given name.",
    inArgs: [{
      name: 'name',
      doc: "",
      type: vdl.Types.STRING
    },
    ],
    outArgs: [{
      name: '',
      doc: "",
      type: vdl.Types.BOOL
    },
    ],
    inStream: null,
    outStream: null,
    tags: []
  },
    
      
    {
    name: 'DisableCache',
    doc: "// DisableCache disables the naming cache.",
    inArgs: [{
      name: 'disable',
      doc: "",
      type: vdl.Types.BOOL
    },
    ],
    outArgs: [],
    inStream: null,
    outStream: null,
    tags: []
  },
    
      
    {
    name: 'Roots',
    doc: "// Roots returns the addresses of the current mounttable roots.",
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
    name: 'SetRoots',
    doc: "// SetRoots sets the current mounttable roots.",
    inArgs: [{
      name: 'roots',
      doc: "",
      type: _type1
    },
    ],
    outArgs: [],
    inStream: null,
    outStream: null,
    tags: []
  },
    
      
    {
    name: 'SetPermissions',
    doc: "// SetPermissions sets the AccessList in a node in a mount table.",
    inArgs: [{
      name: 'name',
      doc: "",
      type: vdl.Types.STRING
    },
    {
      name: 'acl',
      doc: "",
      type: new access.Permissions()._type
    },
    {
      name: 'etag',
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
    name: 'GetPermissions',
    doc: "// GetPermissions returns the AccessList in a node in a mount table.",
    inArgs: [{
      name: 'name',
      doc: "",
      type: vdl.Types.STRING
    },
    ],
    outArgs: [{
      name: 'acl',
      doc: "",
      type: new access.Permissions()._type
    },
    {
      name: 'etag',
      doc: "",
      type: vdl.Types.STRING
    },
    ],
    inStream: null,
    outStream: null,
    tags: []
  },
    
      
    {
    name: 'Delete',
    doc: "// Delete deletes the name from the mounttable and, if requested, any subtree.",
    inArgs: [{
      name: 'name',
      doc: "",
      type: vdl.Types.STRING
    },
    {
      name: 'deleteSubtree',
      doc: "",
      type: vdl.Types.BOOL
    },
    ],
    outArgs: [],
    inStream: null,
    outStream: null,
    tags: []
  },
     
  ]
};

   
 


