const router = require("express").Router();
const { Recipe, User } = require("../models/");
const loginAuth = require("../utils/auth");

// HOMEPAGE ROUTES
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

    // GET recent lunch recipes for homepage
    let recentLunchRecipes = await Recipe.findAll({
      where: {
        mealtime: "lunch",
      },
      limit: 3,
      order: [["time_created", "DESC"]],
    });

    // GET recent dinner recipes for homepage
    let recentDinnerRecipes = await Recipe.findAll({
      where: {
        mealtime: "dinner",
      },
      limit: 3,
      order: [["time_created", "DESC"]],
    });

    // Serializing data so template can read it
    recentBreakfastRecipes = recentBreakfastRecipes.map((recipe) =>
      recipe.get({ plain: true })
    );

    recentLunchRecipes = recentLunchRecipes.map((recipe) =>
      recipe.get({ plain: true })
    );

    recentDinnerRecipes = recentDinnerRecipes.map((recipe) =>
      recipe.get({ plain: true })
    );

    // Passing serialized data into template
    res.render("homepage", {
      recentBreakfastRecipes,
      recentLunchRecipes,
      recentDinnerRecipes,
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
    // console.log(err);
    res.status(400).json(err);
  }
});

// Middleware to prevent non logged in users from viewing the homepage
router.get("/user", loginAuth, async (req, res) => {
  try {
    const userData = await User.findbyPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Recipe }],
      order: [["name", "ASC"]],
    });

    const user = userData.get({ plain: true });
    //render homepage and display user info
    res.render("users", {
      ...user,
      // Check if user is logged in or not
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


// This route takes users to the Addrecipe page
router.get("/Addrecipe", async (req, res) => {
  try {
    // if (req.session.logged_in) {
    //render Addrecipe page
    res.render("Addrecipe");
    // } else {
    //   res.redirect("/login");
    // }
  } catch (err) {
    res.status(500).json(err);
  }
});

// This route will take the users to login page
router.get("/login", (req, res) => {
  // If a session exists, redirect the user to homepage
  if (req.session.logged_in) {
    res.redirect("/users");
    return;
  }

  res.render("login");
});

module.exports = router;
