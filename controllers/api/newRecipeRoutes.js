const router = require("express").Router();
const { Recipes } = require("../../models");
router.post("/", async (req, res) => {
  // We are adding a new breakfast recipe
  const breakfastData = await Recipes.create(req.body);
  return res.json(breakfastData);
});
