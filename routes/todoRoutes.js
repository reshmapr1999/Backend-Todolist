const express = require("express");
const router = express.Router();
const todocontroller = require("../controllers/todocontroller");

// Get all tasks (Home Page)
router.get("/", todocontroller.getTasks);

// Add a new task
router.post("/add-task", todocontroller.addTask);

// Delete a task
router.post("/delete-task/:id", todocontroller.deleteTask);



// Route to display update form
router.get("/edit-task/:id", todocontroller.editTaskPage);

// Route to handle task update
router.post("/update-task/:id", todocontroller.updateTask);


module.exports = router;
