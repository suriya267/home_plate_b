const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require('body-parser');
const recipeRoutes = require("./routes/recipesRoutes");
const { createMongooseConnetion } = require("./config/mongoDBConnection");
dotenv.config();
const PORT = process.env.PORT || 8080;

const server = express();

createMongooseConnetion();
server.use(express.json());

server.use(cors());

server.use(bodyParser.urlencoded({ extended: true }));
server.set("view engine", "ejs");

server.use("/recipes", recipeRoutes);

server.listen(PORT, (error) => {
  if (error) {
    console.log("Error in connect server::",error);
  } else {
    console.log(`Server listening port ${PORT}`);
  }
});
