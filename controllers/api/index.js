const router = require("express").Router();
const userRoutes = require("./userRoutes");
const breakfastRoutes = require("./breakfastRoute");
const lunchRoutes = require("./breakfastRoute");
const dinnerRoutes = require("./dinnerRoutes");

router.use("/user", userRoutes);
router.use("/breakfast", breakfastRoutes);
router.use("/lunch", lunchRoutes);
router.use("/dinner", dinnerRoutes);

module.exports = router;
