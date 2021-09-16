const express = require("express");
const router = express.Router();
const controllers = require("../controllers");

router.post("/:id", controllers.comments_ctrl.createComment);
router.get("/:id/comment/:cid/edit", controllers.comments_ctrl.createComment);
router.put("/:id/comment/:cid", controllers.comments_ctrl.createComment);
router.get("/:id/comment/:cid/delete", controllers.comments_ctrl.createComment);
router.delete("/:id/comment/:cid", controllers.comments_ctrl.createComment);


module.exports = router;