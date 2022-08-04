const router = require("express").Router();
const { Recipe, User } = require("../models/");
const loginAuth = require("../utils/auth");

router.get("/", async (req, res) => {
	try {
		// GET recent breakfast recipes for homepage
		let recentBreakfastRecipes = await Recipe.findAll({
			where: {
				mealtime: "breakfast",
			},
			limit: 3,
			order: [["time_created", "DESC"]],
		});

		let recentLunchRecipes = await Recipe.findAll({
			where: {
				mealtime: "lunch",
			},
			limit: 3,
			order: [["time_created", "DESC"]],
		});

		let recentDinnerRecipes = await Recipe.findAll({
			where: {
				mealtime: "dinner",
			},
			limit: 3,
			order: [["time_created", "DESC"]],
		});




		// let recipes = recentBreakfastRecipes.concat(recentLunchRecipes, recentDinnerRecipes);


		recentBreakfastRecipes = recentBreakfastRecipes.map((recipe) =>
			recipe.get({ plain: true })
		);

		
		recentLunchRecipes = recentLunchRecipes.map((recipe) =>
			recipe.get({ plain: true })
		);

		
		recentDinnerRecipes = recentDinnerRecipes.map((recipe) =>
			recipe.get({ plain: true })
		);



		// Serializing data so template can read it
		// recipes = recipes.map((recipe) =>
		// 	recipe.get({ plain: true })
		// );
		// console.log(recipes);
		// Passsing serialized data into login requirement into template
		res.render("homepage", {
			recentBreakfastRecipes,
			recentLunchRecipes,
			recentDinnerRecipes



			// loggedIn: req.session.loggedIn,
		});
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

router.get("/recipe/recent/breakfast", async (req, res) => {
	try {
		// GET recent breakfast recipes for homepage
		const recentBreakfastRecipes = await Recipe.findAll({
			where: {
				mealtime: "breakfast",
			},
			limit: 3,
			order: [["time_created", "DESC"]],
		});

		// Serializing data so template can read it
		const recipes = recentBreakfastRecipes.map((recipe) =>
			recipe.get({ plain: true })
		);
		console.log(recipes);
		// Passsing serialized data into login requirement into template
		res.render("homepage", {
			recipes,
			// loggedIn: req.session.loggedIn,
		});
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});



router.get("/recipe/:id", async (req, res) => {
	try {
		// GET recipe to show recipe details
		const recipeData = await Recipe.findByPk(req.params.id);

		// Serializing data so template can read it
		const recipe = recipeData.get({ plain: true });

		// Passsing serialized data into login requirement into template
		res.render("recipe-details", {
			recipe,
			// loggedIn: req.session.loggedIn,
		});
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

router.get("/recipe/breakfast", async (req, res) => {
  try {
    // GET all recipes for homepage
    const dbRecipeData = await Recipe.findAll({
      where: {
        mealtime: "breakfast",
      },
    });

    // Serializing data so template can read it
    const recipes = dbRecipeData.map((recipe) => recipes.get({ plain: true }));

		// Passsing serialized data into login requirement into template
		res.render("homepage", {
			recipes
			// loggedIn: req.session.loggedIn,
		});
	} catch (err) {
		console.log(err);
		res.status(500).json(er);
	}
});

// Middleware to prevent non logged in users from viewing the homepage
router.get("/user", loginAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ["password"] },
      order: [["name", "ASC"]],
    });

    const users = userData.map((project) => project.get({ plain: true }));
    //render homepage and display user info
    res.render("homepage", {
      users,
      // Check if user is logged in or not
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // If a session exists, redirect the user to homepage
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

module.exports = router;
