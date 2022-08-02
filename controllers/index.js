const router = require("express").Router();

// All routes begin with /api
const apiRoutes = require("./api");

router.use("/api", apiRoutes);
router.use("/breakfast", breakfast);

module.exports = router;
