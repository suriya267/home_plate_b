const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const recipeRoutes = require("./routes/recipesRoutes");
const { createMongooseConnetion } = require("./config/mongoDBConnection");
dotenv.config();
const PORT = process.env.PORT || 8080;

const server = express();

createMongooseConnetion();
server.use(express.json());

server.use(cors());

server.use("/api/recipe", recipeRoutes);

server.listen(PORT, (error) => {
  if (error) {
    console.log("Error in connect server::",error);
  } else {
    console.log(`Server listening port ${PORT}`);
  }
});
