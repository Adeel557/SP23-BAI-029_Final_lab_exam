const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");

const def = protoLoader.loadSync("image.proto");
const proto = grpc.loadPackageDefinition(def);

const client = new proto.ImageClassifier(
  "localhost:50051",
  grpc.credentials.createInsecure()
);

function callModel() {
  const start = Date.now();
  client.UploadImage({ imageData: Buffer.from("img") }, (err, res) => {
    console.log("gRPC Result:", res);
    console.log("Internal Latency:", Date.now() - start, "ms");
  });
}

callModel();
