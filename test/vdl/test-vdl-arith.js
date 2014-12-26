var test = require('prova');
var vom = require('vom');
var ifaceSigType = require(
  '../../src/v.io/core/veyron2/vdl/vdlroot/src/signature/signature'
).types.Interface;

test('import paths work', function(assert) {
  // We just need to require the arith package to make sure that
  // require calls in the arith package is exercised. For now
  // we don't have anything interesting to actually check about the
  // result. This file is generated by the vdl tool.
  assert.doesNotThrow(function() {
    require(
      '../../src/v.io/core/veyron2/vdl/testdata/arith/arith');
  });
  assert.end();
});

// TODO(alexfandrianto): This test should be removed when the services variable
// is no longer autogenerated by JS VDL. Different tests should replace it.
test('method signature match (temporary)', function(assert) {
  var arith = require(
    '../../src/v.io/core/veyron2/vdl/testdata/arith/arith');
  var service = arith.services.AdvancedMath;
  var serviceDef = arith.serviceDefs.AdvancedMath.prototype.signature().methods;
  for (var i = 0; i < serviceDef.length; i++) {
    var methodData = serviceDef[i];
    var methodName = methodData.name;
    var m = service[methodName];
    assert.ok(m, methodName + ' exists');
    assert.equal(methodData.inArgs.length, m.numInArgs);
    assert.equal(methodData.outArgs.length, m.numOutArgs + 1);
    assert.equal(methodData.inStream !== null, m.inputStreaming);
    assert.equal(methodData.outStream !== null, m.outputStreaming);
    assert.equal(methodData.tags.length, m.tags.length);
  }
  assert.end();
});

test('method signature encode-decode match', function(assert) {
  var arith = require(
    '../../src/v.io/core/veyron2/vdl/testdata/arith/arith');

  var writer;
  var encoder;
  var reader;
  var decoder;
  var sigEncode;
  var sigDecode;

  // For every service signature defined...
  for (var service in arith.serviceDefs) {
    if (arith.serviceDefs.hasOwnProperty(service) && service !== 'package') {
      var signature = arith.serviceDefs.AdvancedMath.prototype.signature();

      // Encode the signature using the type defined in VDL-generated ipc.js
      writer = new vom.ByteArrayMessageWriter();
      encoder = new vom.Encoder(writer);
      encoder.encode(signature, ifaceSigType.prototype._type);
      sigEncode = writer.getBytes();

      // Decode the signature.
      reader = new vom.ByteArrayMessageReader(sigEncode);
      decoder = new vom.Decoder(reader);
      sigDecode = decoder.decode();

      // Ensure that what was decoded matches the original signature deeply.
      assert.deepEqual(sigDecode, signature, service + ' signature match');

      // TODO The signature type should be attached to the generated signature
      // This is currently problematic (Issue 432), so manually attaching type
      // for now and NOT passing the type into the encoder.
      var wrappedSignature = new ifaceSigType(signature);

      // Encode the signature as a wrapped struct.
      writer = new vom.ByteArrayMessageWriter();
      encoder = new vom.Encoder(writer);
      encoder.encode(wrappedSignature);
      sigEncode = writer.getBytes();

      // Decode the signature.
      reader = new vom.ByteArrayMessageReader(sigEncode);
      decoder = new vom.Decoder(reader);
      sigDecode = decoder.decode();

      assert.deepEqual(sigDecode, wrappedSignature, service +
        ' wrapped signature match');
    }
  }
  assert.end();
});
