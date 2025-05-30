const mongoose = require("mongoose");

const URI = "mongodb+srv://suriyawebdev1998:xxh4BlMaV629XRRe@cluster0.h7hn9mi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
async function createMongooseConnetion() {
  try {
    await mongoose.connect(URI);
    console.log("mongoDB connection success");
  } catch (error) {
    console.log("mongoDB connection error");
    console.log("process.env.MONGO_URI", process.env.MONGO_URI);
  }
}

module.exports = { createMongooseConnetion };
