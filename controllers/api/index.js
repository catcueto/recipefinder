const router = require("express").Router();
const userRoutes = require("./userRoutes");
const mealtimeRoutes = require("./mealtimeRoutes");

router.use("/user", userRoutes);
router.use("/mealtime", mealtimeRoutes);

module.exports = router;
