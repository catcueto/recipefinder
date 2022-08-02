const router = require("express").Router();
const Breakfast = require("../../models/newBreakfast");

router.get("/", async (req, res) => {
  // Stores the breakfastData in a variable
  const breakfastData = await Breakfast.findAll();
  // Returns the breakfastData promise inside of the JSON response
  return res.json(breakfastData);
});

router.post("/", async (req, res) => {
  // We are adding a new breakfast recipe
  const breakfastData = await Breakfast.create(req.body);
  return res.json(breakfastData);
});
