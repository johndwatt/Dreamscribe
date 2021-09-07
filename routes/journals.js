const express = require("express");
const router = express.Router();
const controllers = require("../controllers");

// Routes
router.get("/", controllers.journals_ctrl.index);

module.exports = router;