const express = require("express");
const router = express.Router();
const controllers = require("../controllers");

// Routes
router.get("/profile/:id", controllers.profile_ctrl.profileRoute);

module.exports = router;