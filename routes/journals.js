const express = require("express");
const router = express.Router();
const controllers = require("../controllers");

// Routes
router.get("/", controllers.journals_ctrl.indexRoute);
router.get("/new", controllers.journals_ctrl.newRoute);
router.get("/:id", controllers.journals_ctrl.showRoute);


module.exports = router;