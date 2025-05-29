const mongoose = require("mongoose");

const URI = "mongodb://localhost:27017/cooking";
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
