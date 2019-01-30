const express = require("express");
const router = express.Router();
const taskController = require("../controllres/tasks");

router.post("/", taskController.create);
router.get("/new", taskController.new);
router.get("/:id", taskController.show);
// router.put("/:id", taskController.update);

module.exports = router;
