const Task = require("../models/todo");

//  Get all tasks
exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.find().sort({ dueDate: 1 });
       
        res.render("list", { tasks });
    } catch (error) {
        console.log(error);
        res.status(500).send("Error fetching tasks");
    }
};

//  Add a new task
exports.addTask = async (req, res) => {
    try {
        let { title, category, dueDate, customCategory } = req.body;
        
        // Use custom category if provided
        if (category === "Other" && customCategory) {
            category = customCategory;
        }

        await Task.create({ title, category,
             ...(dueDate && !isNaN(new Date(dueDate)) && { dueDate: new Date(dueDate) }) });
        res.redirect("/");
    } catch (error) {
        console.log(error);
        res.status(500).send("Error adding task");
    }
};

//  Delete a task
exports.deleteTask = async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.redirect("/");
    } catch (error) {
        console.log(error);
        res.status(500).send("Error deleting task");
    }
};

// Render Update Page
exports.editTaskPage = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id); // Find task by ID
        if (!task) {
            return res.status(404).send("Task not found");
        }
        res.render("update", { task }); // Render update.ejs with task data
    } catch (error) {
        console.error("Error fetching task for edit:", error);
        res.status(500).send("Error loading update page");
    }
};

// Update Task Handler
exports.updateTask = async (req, res) => {
    try {
        const { title, finalCategory, dueDate } = req.body;
        await Task.findByIdAndUpdate(req.params.id, { 
            title, 
            category: finalCategory,
            dueDate 
        });
        res.redirect("/"); // Redirect back to home after update
    } catch (error) {
        console.error("Error updating task:", error);
        res.status(500).send("Error updating task");
    }
};

