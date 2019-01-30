const express = require("express");
const router = express.Router();
const taskController = require("../controllres/tasks");

router.get("/new", taskController.new);
router.get("/:id", taskController.show);
router.post("/", taskController.create);

module.exports = router;
