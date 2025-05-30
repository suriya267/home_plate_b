const recipesService = require("../services/recipesService");

const getAllRecipes = async (req, res) => {
  try {
    const recipes = await recipesService.getAllRecipes();
    // return res
    //   .status(200)
    //   .json({
    //     result: recipes,
    //     success: true,
    //     message: "Get all recipe successfully",
    //   });
    res.render("index", { recipes });
  } catch (err) {
    // return res
    //   .status(500)
    //   .json({ result: [], success: false, error: err.message });
    console.log("Error in getAllRecipes::", err);

    res.status(500).render("error", {
      status: 500,
      message: "Internal Server Error",
      error: err.message,
    });
  }
};

const getRecipeById = async (req, res) => {
  try {
    console.log("req---->", req);

    const recipe = await recipesService.getRecipeById(req.params.id);
    if (!recipe) {
      res
        .status(404)
        .render(error, { success: false, message: "Recipe not found" });
    }
    res.render("show", { recipe });
  } catch (err) {
    console.log("req---->", req.params);

    console.log("Error in getRecipeById::", err);

    res.status(500).render("error", {
      status: 500,
      message: "Internal Server Error",
      error: err.message,
    });
  }
};

const createRecipe = async (req, res) => {
  try {
    await recipesService.createRecipe(req.body);
    res.redirect("/recipes");
  } catch (err) {
    console.log("Error in createRecipe::", err);

    res.status(500).render("error", {
      status: 500,
      message: "Internal Server Error",
      error: err.message,
    });
  }
};

const editRecipeById = async (req, res) => {
  try {
    const recipe = await recipesService.getRecipeById(req.params.id);
    res.render("edit", { recipe });
  } catch (err) {
    console.log("Error in editRecipeById::", err);

    res.status(500).render("error", {
      status: 500,
      message: "Internal Server Error",
      error: err.message,
    });
  }
};

const updateRecipe = async (req, res) => {
  try {
    const updatedRecipe = await recipesService.updateRecipe(
      req.params.id,
      req.body
    );
    if (!updatedRecipe) {
      res
        .status(404)
        .render(error, { success: false, message: "Recipe not found" });
    }
    res.redirect("/recipes");
  } catch (err) {
    console.log("Error in updateRecipe::", err);

    res.status(500).render("error", {
      status: 500,
      message: "Internal Server Error",
      error: err.message,
    });
  }
};

const deleteRecipe = async (req, res) => {
  try {
    const deleted = await recipesService.deleteRecipe(req.params.id);
    if (!deleted) {
      res
        .status(404)
        .render("error", { success: false, message: "Recipe not found" });
    }
    res.redirect("/recipes");
  } catch (err) {
    console.log("Error in deleteRecipe::", err);

    res.status(500).render("error", {
      status: 500,
      message: "Internal Server Error",
      error: err.message,
    });
  }
};

module.exports = {
  getAllRecipes,
  getRecipeById,
  createRecipe,
  updateRecipe,
  deleteRecipe,
  editRecipeById,
};
