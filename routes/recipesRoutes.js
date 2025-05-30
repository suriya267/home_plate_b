const express = require("express");
const router = express.Router();
const recipeController = require("../controllers/recipesController");

router.get("/", recipeController.getAllRecipes);
router.get("/one/:id", recipeController.getRecipeById);
router.get("/new", (req, res) => {
  res.render("new");
});
router.post("/", recipeController.createRecipe);
router.get("/edit/:id", recipeController.editRecipeById);
router.post("/:id", recipeController.updateRecipe);
router.post("/delete/:id", recipeController.deleteRecipe);

module.exports = router;
