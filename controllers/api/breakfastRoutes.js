const router = require("express").Router();
const { AllMeals } = require("../../models");

// Get all breakfast
router.get("/breakfast", async (req, res) => {
  try {
    // Stores the breakfastData in a variable
    const breakfastData = await AllMeals.findAll({
      where: {
        mealtime: "breakfast",
      },
    });
    // R
    const breakfast = await breakfastData.get({ plain: true });
    res.render("breakfast", { breakfast });
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get("/recipe/breakfast", async (req, res) => {
//   try {
//     // GET all recipes for homepage
//     const dbRecipeData = await Recipe.findAll({
//       where: {
//         mealtime: "breakfast",
//       },
//     });

//     // Serializing data so template can read it
//     const recipes = dbRecipeData.map((recipe) => recipes.get({ plain: true }));

//     // Passsing serialized data into login requirement into template
//     res.render("homepage", {
//       recipes,
//       // loggedIn: req.session.loggedIn,
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

module.exports = router;
