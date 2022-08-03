const router = require("express").Router();
const userRoutes = require("./userRoutes");
const breakfastRoutes = require("./breakfastRoute");
const lunchRoutes = require("./breakfastRoute");
const dinnerRoutes = require("./dinnerRoutes");
const newRecipe = require("./newRecipe");

router.use("/userlogin", userRoutes);
router.use("/breakfast", breakfastRoutes);
router.use("/lunch", lunchRoutes);
router.use("/dinner", dinnerRoutes);
router.use("/addyourown", newRecipe);

module.exports = router;
