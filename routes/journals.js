const express = require("express");
const router = express.Router();
const controllers = require("../controllers");

// Routes
router.get("/", controllers.journals_ctrl.indexRoute);
router.get("/new", controllers.journals_ctrl.newRoute);
router.post("/", controllers.journals_ctrl.createRoute);
router.get("/:id", controllers.journals_ctrl.showRoute);
router.get("/:id/edit", controllers.journals_ctrl.editRoute);


module.exports = router;