var test = require('prova');
var vom = require('../../src/vom');
var ifaceSigType = require(
  '../../src/v.io/core/veyron2/vdl/vdlroot/src/signature'
).Interface;

test('import paths work', function(assert) {
  // We just need to require the arith package to make sure that
  // require calls in the arith package is exercised. For now
  // we don't have anything interesting to actually check about the
  // result. This file is generated by the vdl tool.
  assert.doesNotThrow(function() {
    require(
      '../vdl-out/v.io/core/veyron2/vdl/testdata/arith');
  });
  assert.end();
});

test('method signature encode-decode match', function(assert) {
  var arith = require(
    '../vdl-out/v.io/core/veyron2/vdl/testdata/arith');

  var writer;
  var encoder;
  var reader;
  var decoder;
  var sigEncode;
  var sigDecode;

  // For every service signature defined...
  var serviceNames = ['Arith', 'Calculator'];
  serviceNames.forEach(function(serviceName) {
    if (!arith.hasOwnProperty(serviceName)) {
      assert.fail('Expected interface ' + serviceName + ' to be defined');
      return;
    }
    var signature = arith.AdvancedMath.prototype.
                    _serviceDescription;

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
    assert.deepEqual(sigDecode, signature, serviceName + ' signature match');

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

    assert.deepEqual(sigDecode, wrappedSignature, serviceName +
      ' wrapped signature match');
  });
  assert.end();
});

var expectedAdvancedMathDescription =
  require('../vdl/expected-gen/testdata/arith').AdvancedMath.
  prototype._serviceDescription;

test('correct service description', function(assert) {
  var arith = require(
    '../../test/vdl-out/v.io/core/veyron2/vdl/testdata/arith');
  var description = (new arith.AdvancedMath())._serviceDescription;
  assert.deepEqual(description, expectedAdvancedMathDescription,
    'service description matches expectation');
  assert.end();
});