const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");

const packageDef = protoLoader.loadSync("image.proto");
const proto = grpc.loadPackageDefinition(packageDef);

function UploadImage(call, callback) {
  callback(null, {
    label: "dog",
    confidence: 0.88,
  });
}

const server = new grpc.Server();
server.addService(proto.ImageClassifier.service, { UploadImage });

server.bindAsync(
  "0.0.0.0:50051",
  grpc.ServerCredentials.createInsecure(),
  () => {
    console.log("Model Service running at 50051");
    server.start();
  }
);
