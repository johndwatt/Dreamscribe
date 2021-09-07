const express = require("express");
const router = express.Router();
const controllers = require("../controllers");

// Routes
router.get("/", controllers.journals_ctrl.index);
router.get("/:id", controllers.journals_ctrl.show);

module.exports = router;