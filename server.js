const express = require("express");
const cors = require("cors");
const recipeRoutes = require("./routes/recipesRoutes");
const { createMongooseConnetion } = require("./config/mongoDBConnection");
const port = 8080;

const server = express();

createMongooseConnetion();
server.use(express.json());

server.use(cors());

server.use("/api/recipe", recipeRoutes);

server.listen(port, (error) => {
  if (error) {
    console.log("Error in connect server");
  } else {
    console.log("Server listening port 8080");
  }
});
