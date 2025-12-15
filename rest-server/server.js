const express = require("express");
const multer = require("multer");
const app = express();
const upload = multer();

app.post("/uploadImage", upload.single("image"), (req, res) => {
  const start = Date.now();

  // Dummy AI classification
  const labels = ["cat", "dog", "car", "digit-7"];
  const result = {
    label: labels[Math.floor(Math.random() * labels.length)],
    confidence: Math.random().toFixed(2),
  };

  const time = Date.now() - start;
  console.log("REST Response Time:", time, "ms");

  res.json(result);
});

app.listen(3000, () => console.log("REST Server running on port 3000"));
