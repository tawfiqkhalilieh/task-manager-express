const getAllTasks = (req, res) => {
  res.send("All Items");
};

const createTask = (res, req) => {
  res.send("Task Created");
};

const getTask = (res, req) => {
  res.send("Task");
};

const updateTask = (res, req) => {
  res.send("Task");
};

const deleteTask = (res, req) => {
  res.send("Task Deleted");
};
module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
  getTask,
};
