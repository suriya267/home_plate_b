const Recipe = require("../models/recipesModel");

const getAllRecipes = async () => {
  return await Recipe.find();
};

const getRecipeById = async (id) => {
  return await Recipe.findById(id);
};

const createRecipe = async (recipeData) => {
  const recipe = new Recipe(recipeData);
  return await recipe.save();
};

const updateRecipe = async (id, updateData) => {
  console.log("updateData", updateData);

  return await Recipe.findByIdAndUpdate(id, updateData, { new: true });
};

const deleteRecipe = async (id) => {
  return await Recipe.findByIdAndDelete(id);
};

module.exports = {
  getAllRecipes,
  getRecipeById,
  createRecipe,
  updateRecipe,
  deleteRecipe,
};
