const mongoose = require("mongoose");

async function createMongooseConnetion() {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}`);
    console.log("mongoDB connection success");
  } catch (error) {
    console.log("mongoDB connection error::", error);
    console.log("process.env.MONGO_URI", process.env.MONGO_URI);
  }
}

module.exports = { createMongooseConnetion };
