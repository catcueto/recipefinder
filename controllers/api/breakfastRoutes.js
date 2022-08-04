const router = require("express").Router();
const { Recipe } = require("../../models");

// Get all breakfast
router.get("/recipe/breakfast", async (req, res) => {
  try {
    // GET all breakfast recipes for breakfast page
    const breakfastData = await Recipe.findAll({
      where: {
        mealtime: "breakfast",
      },
    });
    
    const breakfast = breakfastData.map((recipe) => recipe.get({ plain: true }));

    res.render("breakfast", { 
      breakfast 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
