const router = require("express").Router();
const { Breakfast, Lunch, Dinner } = require("../../models");

// Get all breakfast
router.get("/breakfast", async (req, res) => {
  // Stores the breakfastData in a variable
  const breakfastData = await Breakfast.findAll({
    where: {
      mealtime: "breakfast",
    }
  });
    // R
  const breakfast = await breakfastData.get({ plain: true })
  res.render("breakfast", {breakfast});
} 
catch (err) {
  res.status(500).json(err);
}

module.exports = router;