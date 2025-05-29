const express = require("express");
const cors = require("cors");
const server = express();
const port = 8080;

server.use(cors());

server.listen(port, "localhost", (error) => {
  if (error) {
    console.log("Error in connect server");
  } else {
    console.log("Server listening port 8080");
  }
});
