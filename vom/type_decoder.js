/**
 * @fileoverview Type decoder handles decoding types from a VOM stream by
 * looking up by id.
 */

module.exports = TypeDecoder;

/**
 * Create a TypeDecoder.
 * This holds the set of cached types and assists in decoding.
 * @constructor
 */
function TypeDecoder() {
  this._definedTypes = {};
  // Partial types are similar to definedTypes but have type ids for child types
  // rather than fully defined type structures.
  this._partialTypes = {};
}

var Kind = require('./kind.js');
var BootstrapTypes = require('./bootstrap_types.js');
var RawVomReader = require('./raw_vom_reader.js');

/**
 * Looks up a type in the decoded types cache by id.
 * @param {number} typeId The type id.
 * @return {Type} The decoded type or undefined.
 */
TypeDecoder.prototype.lookupType = function(typeId) {
  return this._lookupTypeImpl(typeId, true);
};

TypeDecoder.prototype._lookupTypeImpl = function(typeId, defineUndefined) {
  if (typeId < 0) {
    throw new Error('invalid negative type id.');
  }

  var type = BootstrapTypes.idToType(typeId);
  if (type !== undefined) {
    return type;
  }

  if (defineUndefined && this._partialTypes.hasOwnProperty(typeId)) {
    this._tryBuildPartialType(typeId, this._partialTypes[typeId]);
  }

  return this._definedTypes[typeId];
};

/**
 * Add a new type definition to the type cache.
 * @param {number} typeId The id of the type.
 * @param {Uint8Array} The raw bytes that describe the type structure.
 */
TypeDecoder.prototype.defineType = function(typeId, messageBytes) {
  if (typeId < 0) {
    throw new Error('invalid negative type id ' + typeId + '.');
  }
  if (this._definedTypes[typeId] !== undefined ||
    this._partialTypes[typeId] !== undefined) {
    throw new Error('Cannot redefine type with id ' + typeId);
  }

  // Read the type in and add it to the partial type set.
  this._partialTypes[typeId] = this._readPartialType(messageBytes);
};

/**
 * Flattens the type's dependencies into a typeId->(type, partial type) map.
 * @throws Error if the type's dependencies are not available.
 */
TypeDecoder.prototype._flattenTypeDepGraph = function(typeId, typeDeps) {
  // Already in map?
  if (typeDeps[typeId] !== undefined) {
    return;
  }
  // Already defined?
  if (this._lookupTypeImpl(typeId, false) !== undefined) {
    return;
  }
  // Allocate a type for the partial type.
  if (!this._partialTypes.hasOwnProperty(typeId)) {
    throw new Error('Type definition with ID ' + typeId +
      ' not received.');
  }
  var partialType = this._partialTypes[typeId];
  typeDeps[typeId] = {
    partialType: partialType,
    type: {}
  };

  // Recurse.
  if (partialType.namedTypeId !== undefined) {
    this._flattenTypeDepGraph(partialType.namedTypeId, typeDeps);
  }
  if (partialType.keyTypeId !== undefined) {
    this._flattenTypeDepGraph(partialType.keyTypeId, typeDeps);
  }
  if (partialType.elemTypeId !== undefined) {
    this._flattenTypeDepGraph(partialType.elemTypeId, typeDeps);
  }
  if (partialType.typeIds !== undefined) {
    for (var i = 0; i < partialType.typeIds.length; i++)
    this._flattenTypeDepGraph(partialType.typeIds[i], typeDeps);
  }
  if (partialType.fields !== undefined) {
    for (var i = 0; i < partialType.fields.length; i++) {
      this._flattenTypeDepGraph(partialType.fields[i].typeId, typeDeps);
    }
  }
};

/**
 * Tries to build a partial type into a type.
 * This has two steps:
 * 1. Allocate type objects for all dependencies
 * 2. Copy the type and replace the type id with the created types.
 * 3. Copy named types and change the name.
 */
TypeDecoder.prototype._tryBuildPartialType = function(typeId) {
  if (!this._partialTypes.hasOwnProperty(typeId)) {
    throw new Error('Type definition with ID ' + typeId +
      ' not received.');
  }
  var partialType = this._partialTypes[typeId];

  var flattenedTypes = {};
  this._flattenTypeDepGraph(typeId, flattenedTypes);

  var self = this;
  var getType = function(id) {
    var type = self._lookupTypeImpl(id, false);
    if (type !== undefined) {
      return type;
    }
    type = flattenedTypes[id].type;
    if (type !== undefined) {
      return type;
    }
    throw new Error('Type unexpectedly undefined.');
  };

  // All dependencies are ready. Build the type.
  for (var id in flattenedTypes) {
    var partialType = flattenedTypes[id].partialType;
    var type = flattenedTypes[id].type;

    if (partialType.namedTypeId !== undefined) {
      // Handle named types in a second pass because it involves copying.
      continue;
    }

    type.kind = partialType.kind;
    if (partialType.name !== undefined) {
      type.name = partialType.name;
    }
    if (partialType.labels !== undefined) {
      type.labels = partialType.labels;
    }
    if (partialType.len !== undefined) {
      type.len = partialType.len;
    }

    if (partialType.keyTypeId !== undefined) {
      type.key = getType(partialType.keyTypeId);
    }
    if (partialType.elemTypeId !== undefined) {
      type.elem = getType(partialType.elemTypeId);
    }
    if (partialType.typeIds !== undefined) {
      type.types = new Array(partialType.typeIds.length);
      for (var i = 0; i < partialType.typeIds.length; i++) {
        type.types[i] = getType(partialType.typeIds[i]);
      }
    }
    if (partialType.fields !== undefined) {
      type.fields = new Array(partialType.fields.length);
      for (var i = 0; i < partialType.fields.length; i++) {
        var partialField = partialType.fields[i];
        type.fields[i] = {
          name: partialField.name,
          type: getType(partialField.typeId)
        };
      }
    }
  }

  // Now handle named types.
  for (var id in flattenedTypes) {
    if (flattenedTypes.hasOwnProperty(id)) {
      var partialType = flattenedTypes[id].partialType;
      var type = flattenedTypes[id].type;

      if (partialType.namedTypeId !== undefined) {
        // Special case for named types.
        var toCopy = getType(partialType.namedTypeId);
        for (var fieldName in toCopy) {
          if (toCopy.hasOwnProperty(fieldName)) {
            type[fieldName] = toCopy[fieldName];
          }
        }
        type.name = partialType.name;
      }

      // Make the type immutable.
      Object.freeze(type);

      // Define the type.
      this._definedTypes[id] = type;

      // Remove the type from the partial type set.
      delete this._partialTypes[id];
    }
  }
};

/**
 * Read the binary type description into a partial type description.
 * @param {Uint8Array} messageBytes The binary type message.
 * @return {PartialType} The type that was read.
 */
TypeDecoder.prototype._readPartialType = function(messageBytes) {
  var reader = new RawVomReader(messageBytes);
  var wiretypeId = reader.readUint();
  var partialType = {};
  switch (wiretypeId) {
    case BootstrapTypes.definitions.WIRENAMED.id:
      endDef:
      while (true) {
        var nextIndex = reader.readUint();
        switch(nextIndex) {
          case 0:
            break endDef;
          case 1:
            partialType.name = reader.readString();
            break;
          case 2:
            partialType.namedTypeId = reader.readUint();
            break;
          default:
            throw new Error('Unexpected index for WireNamed: ' + nextIndex);
          }
      }
      break;
    case BootstrapTypes.definitions.WIREENUM.id:
      partialType.kind = Kind.ENUM;
      endDef:
      while (true) {
        var nextIndex = reader.readUint();
        switch(nextIndex) {
          case 0:
            break endDef;
          case 1:
            partialType.name = reader.readString();
            break;
          case 2:
            partialType.labels = new Array(reader.readUint());
            for (var i = 0; i < partialType.labels.length; i++) {
              partialType.labels[i] = reader.readString();
            }
            break;
          default:
            throw new Error('Unexpected index for WireEnum: ' + nextIndex);
          }
      }
      break;
    case BootstrapTypes.definitions.WIREARRAY.id:
      partialType.kind = Kind.ARRAY;
      endDef:
      while (true) {
        var nextIndex = reader.readUint();
        switch(nextIndex) {
          case 0:
            break endDef;
          case 1:
            partialType.name = reader.readString();
            break;
          case 2:
            partialType.elemTypeId = reader.readUint();
            break;
          case 3:
            partialType.len = reader.readUint();
            break;
          default:
            throw new Error('Unexpected index for WireArray: ' + nextIndex);
          }
      }
      break;
    case BootstrapTypes.definitions.WIRELIST.id:
      partialType.kind = Kind.LIST;
      endDef:
      while (true) {
        var nextIndex = reader.readUint();
        switch(nextIndex) {
          case 0:
            break endDef;
          case 1:
            partialType.name = reader.readString();
            break;
          case 2:
            partialType.elemTypeId = reader.readUint();
            break;
          default:
            throw new Error('Unexpected index for WireList: ' + nextIndex);
          }
      }
      break;
    case BootstrapTypes.definitions.WIRESET.id:
      partialType.kind = Kind.SET;
      endDef:
      while (true) {
        var nextIndex = reader.readUint();
        switch(nextIndex) {
          case 0:
            break endDef;
          case 1:
            partialType.name = reader.readString();
            break;
          case 2:
            partialType.keyTypeId = reader.readUint();
            break;
          default:
            throw new Error('Unexpected index for WireSet: ' + nextIndex);
          }
      }
      break;
    case BootstrapTypes.definitions.WIREMAP.id:
      partialType.kind = Kind.MAP;
      endDef:
      while (true) {
        var nextIndex = reader.readUint();
        switch(nextIndex) {
          case 0:
            break endDef;
          case 1:
            partialType.name = reader.readString();
            break;
          case 2:
            partialType.keyTypeId = reader.readUint();
            break;
          case 3:
            partialType.elemTypeId = reader.readUint();
            break;
          default:
            throw new Error('Unexpected index for WireMap: ' + nextIndex);
          }
      }
      break;
    case BootstrapTypes.definitions.WIRESTRUCT.id:
      partialType.kind = Kind.STRUCT;
      endDef:
      while (true) {
        var nextIndex = reader.readUint();
        switch(nextIndex) {
          case 0:
            break endDef;
          case 1:
            partialType.name = reader.readString();
            break;
          case 2:
            partialType.fields = new Array(reader.readUint());
            for (var i = 0; i < partialType.fields.length; i++) {
              partialType.fields[i] = {};
              sfEndDef:
              while(true) {
                var sfNextIndex = reader.readUint();
                switch(sfNextIndex) {
                  case 0:
                    break sfEndDef;
                  case 1:
                    partialType.fields[i].name = reader.readString();
                    break;
                  case 2:
                    partialType.fields[i].typeId = reader.readUint();
                    break;
                }
              }
            }
            break;
          default:
            throw new Error('Unexpected index for WireStruct: ' + nextIndex);
          }
      }
      break;
    case BootstrapTypes.definitions.WIREONEOF.id:
      partialType.kind = Kind.ONEOF;
      endDef:
      while (true) {
        var nextIndex = reader.readUint();
        switch(nextIndex) {
          case 0:
            break endDef;
          case 1:
            partialType.name = reader.readString();
            break;
          case 2:
            partialType.typeIds = new Array(reader.readUint());
            for (var i = 0; i < partialType.typeIds.length; i++) {
              partialType.typeIds[i] = reader.readUint();
            }
            break;
          default:
            throw new Error('Unexpected index for WireOneOf: ' + nextIndex);
          }
      }
      break;
    case BootstrapTypes.definitions.WIRENILABLE.id:
      partialType.kind = Kind.NILABLE;
      endDef:
      while (true) {
        var nextIndex = reader.readUint();
        switch(nextIndex) {
          case 0:
            break endDef;
          case 1:
            partialType.elemTypeId = reader.readUint();
            break;
          default:
            throw new Error('Unexpected index for WireNilable: ' + nextIndex);
          }
      }
      break;
    default:
      throw new Error('Unknown wire type id ' + wiretypeId);
  }
  return partialType;
};