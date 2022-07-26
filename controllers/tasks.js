const Task = require("../models/task");
const getAllTasks = (req, res) => {
  res.send("All Items");
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create({
      name: req.body.name,
      completed: req.body.completed,
    });
    res.status(201).json({ task });
  } catch (err) {
    res.status(500).json({
      message: err,
    });
  }
};

const getTask = (req, res) => {
  res.json({
    id: req.params.id,
  });
};

const updateTask = (req, res) => {
  res.send("Update Task");
};

const deleteTask = (req, res) => {
  res.send("Task Deleted");
};
module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
  getTask,
};
