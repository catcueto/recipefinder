const router = require("express").Router();
const { Recipe, User } = require("../models/");
const loginAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    // Getting all recipes for homepage
    const dbRecipeData = await Recipe.findAll({
      include: [
        {
          model: Recipe,
          // name and B, L, or D
          attributes: ["name", "mealtime"],
        },
      ],
    });

    // Serializing data so template can read it
    const recipes = dbRecipeData.map((recipe) => recipe.get({ plain: true }));

    // Passsing serialized data into login requirement into template
    res.render("homepage", {
      recipes,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(er);
  }
});

// TODO: Get breakfast recipes
// router.get("/breakfast", async (req, res) => {
//   try {
//     const dbRecipeData = await
//   }
// });

// Middleware to prevent non logged in users from viewing the homepage
router.get("/", loginAuth, async (req, res) => {
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
