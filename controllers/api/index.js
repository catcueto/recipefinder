<<<<<<< HEAD
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
=======
// const router = require("express").Router();
// // const userRoutes = require("./userRoutes");
// // const breakfastRoutes = require("./breakfastRoute");
// // const LunchRoutes = require("./breakfastRoute");

// router.use("/travellers", travellerRoutes);
// router.use("/locations", locationRoutes);
// router.use("/trips", tripRoutes);
>>>>>>> 96cd23c25dfbe495af4db2d8b33db06104eaf0d4

// module.exports = router;
