const router = require("express").Router();
const { Recipe } = require("../models/");
const loginAuth = require("../utils/auth");

// GET all meals for homepage
router.get("/", async (req, res) => {
  try {
    const dbRecipeData = await Recipes.findAll({
      include: [{ model: Recipe, attributes: ["name", "description"] }],
    });

    const recipes = dbRecipeData.map((recipe) => recipe.get({ plain: true }));
    res.render("homepage", {
      recipes,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(er);
  }
});

// Prevent non logged in users from viewing the homepage
router.get("/", withAuth, async (req, res) => {
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
