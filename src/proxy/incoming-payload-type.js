/**
 * @fileoverview Enum for incoming payload types
 * @private
 */

var IncomingPayloadType = {
  FINAL_RESPONSE: 0, // Final response to a call originating from JS
  STREAM_RESPONSE: 1, // Stream response to a call originating from JS
  ERROR_RESPONSE: 2, // Error response to a call originating from JS
  INVOKE_REQUEST: 3, // Request to invoke a method in JS originating from server
  STREAM_CLOSE: 4,  // Response saying that the stream is closed
  LOOKUP_REQUEST: 5, // A request to perform a dispatcher lookup
  AUTHORIZATION_REQUEST: 6,  // A request to authorize an rpc.
  CANCEL: 7 // A request to cancel a previously invoked JS method
};

module.exports = IncomingPayloadType;
