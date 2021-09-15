const express = require("express");
const router = express.Router();
const controllers = require("../controllers");

// Routes
router.get("/home", controllers.info_ctrl.homeRoute);
router.get("/about", controllers.info_ctrl.aboutRoute);

module.exports = router;