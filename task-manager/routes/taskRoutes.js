const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const auth = require("../middleware/auth");
const taskController = require("../controllers/taskController");

router.post(
  "/",
  [
    auth,
    [
      check("title", "Title is required").not().isEmpty(),
      check("description", "Description is required").not().isEmpty(),
    ],
  ],
  taskController.createTask
);

router.get("/", auth, taskController.getAllTasks);
router.get("/:id", auth, taskController.getTaskById);
router.put(
  "/:id",
  [
    auth,
    [
      check("title", "Title is required").not().isEmpty(),
      check("description", "Description is required").not().isEmpty(),
    ],
  ],
  taskController.updateTask
);
router.delete("/:id", auth, taskController.deleteTask);

module.exports = router;
