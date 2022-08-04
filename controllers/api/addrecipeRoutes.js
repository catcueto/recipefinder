const router = require("express").Router();
const {recipe} = require("../../models/recipe");
// router.post("/addrecipe", async (req, res) => {
//   const recipeData = await recipe.create(req.body);
//   return res.json(recipeData);
// });
router.post('/addrecipe', async (req, res) => {
  try {
    const recipeData = await recipe.create({
      name: req.body.dish_name,
      ingredients: req.body.ingredients,
      mealtime: req.body.mealtime,
      filename: req.body.filename,
    });
    res.status(200).json(recipeData);
  } catch (err) {
    res.status(400).json(err);
  }
});