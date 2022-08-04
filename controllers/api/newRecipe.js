const router = require("express").Router();
const { Breakfast, Lunch, Dinner } = require("../../models");
router.post("/", async (req, res) => {
  // We are adding a new breakfast recipe
  const breakfastData = await Breakfast.create(req.body);
  return res.json(breakfastData);
});
