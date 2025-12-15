const fs = require("fs");
const axios = require("axios");
const FormData = require("form-data");

async function uploadImage() {
  const form = new FormData();
  form.append("image", fs.createReadStream("sample.jpeg"));

  const start = Date.now();
  const res = await axios.post("http://localhost:3000/uploadImage", form, {
    headers: form.getHeaders(),
  });
  const time = Date.now() - start;

  console.log("REST Result:", res.data);
  console.log("REST Time:", time, "ms");
}

uploadImage();
