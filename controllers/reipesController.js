const recipesService = require("../services/recipesService");

const getAllRecipes = async (req, res) => {
  try {
    const recipes = await recipesService.getAllRecipes();
    return res
      .status(200)
      .json({
        result: recipes,
        success: true,
        message: "Get all recipe successfully",
      });
  } catch (err) {
    return res
      .status(500)
      .json({ result: [], success: false, error: err.message });
  }
};

const getRecipeById = async (req, res) => {
  try {
    const recipe = await recipesService.getRecipeById(req.params.id);
    if (!recipe) {
      return res
        .status(404)
        .json({ success: false, message: "Recipe not found" });
    }
    return res.status(200).json({
      result: recipe,
      success: true,
      message: "Get recipe successfully",
    });
  } catch (err) {
    return res
      .status(500)
      .json({ result: {}, success: false, error: err.message });
  }
};

const createRecipe = async (req, res) => {
  try {
    const newRecipe = await recipesService.createRecipe(req.body);
    return res.status(201).json({
      result: newRecipe,
      success: true,
      message: "Recipe added successfully",
    });
  } catch (err) {
    return res
      .status(400)
      .json({ result: {}, success: false, error: err.message });
  }
};

const updateRecipe = async (req, res) => {
  try {
    console.log("req", req);

    const updatedRecipe = await recipesService.updateRecipe(
      req.params.id,
      req.body
    );
    if (!updatedRecipe) {
      return res
        .status(404)
        .json({ success: false, message: "Recipe not found" });
    }
    return res.status(200).json({
      result: updatedRecipe,
      success: true,
      message: "Recipe updated successfully",
    });
  } catch (err) {
    console.log("req error", req);

    return res
      .status(400)
      .json({ result: {}, success: false, error: err.message });
  }
};

const deleteRecipe = async (req, res) => {
  try {
    const deleted = await recipesService.deleteRecipe(req.params.id);
    if (!deleted) {
      return res
        .status(404)
        .json({ success: false, message: "Recipe not found" });
    }
    return res
      .status(200)
      .json({ success: true, message: "Recipe deleted successfully" });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
};

module.exports = {
  getAllRecipes,
  getRecipeById,
  createRecipe,
  updateRecipe,
  deleteRecipe,
};
