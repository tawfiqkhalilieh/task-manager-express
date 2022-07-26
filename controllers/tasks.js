const Task = require("../models/task");
const asyncWrapper = require("../middleware/async");
// const { createCostumeError } = require("../errors/costum-error");
const { CraeteCustomError } = require("../errors/costum-error");
const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create({
    name: req.body.name,
    completed: req.body.completed,
  });
  res.status(201).json({ task });
});

const getTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findOne({
    _id: taskID,
  });
  if (!task) {
    return next(CraeteCustomError(`no task with id: ${taskID}`, 404));
    // res.send(404).json({ msg: `no task with id: ${taskID}` });
    return;
  } else {
    res.status(200).json({
      task,
    });
  }
});

const updateTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndUpdate(
    {
      _id: taskID,
    },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );
  if (!task) {
    // const err = new Error("Task not found");
    // err.status = 404;
    // next(err);
    return next(CraeteCustomError(`no task with id: ${taskID}`, 404));
    // res.send(404).json({ msg: `no task with id: ${taskID}` });
    return;
  } else {
    res.status(200).json({
      task,
    });
  }
});

const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndDelete({
    _id: taskID,
  });
  if (!task) {
    // const err = new Error("Task not found");
    // err.status = 404;
    // next(err);
    return next(CraeteCustomError(`no task with id: ${taskID}`, 404));
    // res.status(404).json({
    //   message: `no task with the id: ${id}`,
    // });
  }
  res.status(200).json({ task });
});

module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
  getTask,
};
