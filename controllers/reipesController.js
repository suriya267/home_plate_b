const recipesService = require("../services/recipesService");

const getAllRecipes = async (req, res) => {
  try {
    const recipes = await recipesService.getAllRecipes();
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getRecipeById = async (req, res) => {
  try {
    const recipe = await recipesService.getRecipeById(req.params.id);
    if (!recipe) return res.status(404).json({ message: "Recipe not found" });
    res.json(recipe);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createRecipe = async (req, res) => {
  try {
    const newRecipe = await recipesService.createRecipe(req.body);
    res.status(201).json(newRecipe);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const updateRecipe = async (req, res) => {
  try {
    console.log("req", req);

    const updatedRecipe = await recipesService.updateRecipe(
      req.params.id,
      req.body
    );
    if (!updatedRecipe)
      return res.status(404).json({ message: "Recipe not found" });
    res.json(updatedRecipe);
  } catch (err) {
    console.log("req error",req);
    
    res.status(400).json({ error: err.message });
  }
};

const deleteRecipe = async (req, res) => {
  try {
    const deleted = await recipesService.deleteRecipe(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Recipe not found" });
    res.json({ message: "Recipe deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllRecipes,
  getRecipeById,
  createRecipe,
  updateRecipe,
  deleteRecipe,
};
