var IncomingPayloadType = require('./incoming-payload-type');
var ErrorConversion = require('./error-conversion');
var DecodeUtil = require('../lib/decode-util');
var vError = require('../lib/verror');

module.exports = Handler;

/*
 * A simple incoming stream handler that handles incoming response, error
 * and close messages and queues them on the given stream object.
 * @param {Stream} Stream instance
 * @constructor
 */
function Handler(stream) {
  this._stream = stream;
}

Handler.prototype.handleResponse = function(type, data) {
  switch (type) {
    case IncomingPayloadType.STREAM_RESPONSE:
      try {
        data = DecodeUtil.decode(data);
      } catch (e) {
        this._stream.emit(
          new vError.InternalError('Failed to decode result: ' + e));
        return true;
      }

      this._stream._queueRead(data);
      return true;
    case IncomingPayloadType.STREAM_CLOSE:
      this._stream._queueRead(null);
      return true;
    case IncomingPayloadType.ERROR_RESPONSE:
      this._stream.emit('error', ErrorConversion.toJSerror(data));
      return true;
  }

  // can't handle the given type
  return false;
};