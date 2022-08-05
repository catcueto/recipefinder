const router = require("express").Router();
const { Recipe } = require("../../models");

// GET - grabs recipes by their meal time
router.get("/:mealtime", async (req, res) => {
  try {
    // Grabs pagetitle from the parameters
    let pageTitle = req.params.mealtime;
    pageTitle = pageTitle.charAt(0).toUpperCase() + pageTitle.slice(1);

		// Grabs the recipe identified by their meal time
		let mealtimeRecipes = await Recipe.findAll({
			where: {
				mealtime: req.params.mealtime,
			},
		});

    // Serializing data so template can read it
    mealtimeRecipes = mealtimeRecipes.map((recipe) =>
      recipe.get({ plain: true })
    );

    // Passing serialized data into template
    res.render("mealtime", {
      mealtimeRecipes,
      pageTitle,
      // loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
module.exports = router;
