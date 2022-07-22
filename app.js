const express = require("express");
const app = express();
const port = 3000;
const tasks = require("./routes/tasks");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Task Manager App");
});
app.get("/health", (req, res) => {
  res.send("I am very healthy!!");
});
app.use("/api/v1/tasks", tasks);

app.listen(port, console.log(`Listening on port ${port}....`));
