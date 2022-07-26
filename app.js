require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.port || 3000;
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

app.use(express.json());
app.use(express.static("./public"));
app.use("/api/v1/tasks", tasks);
app.use(notFound);
app.use(errorHandlerMiddleware);

app.get("/", (req, res) => {
  res.send("Task Manager App");
});

app.get("/health", (req, res) => {
  res.send("I am very healthy!!");
});

const start = async () => {
  try {
    await connectDB(process.env.MongoURI);
    app.listen(port, console.log(`Listening on port ${port}....`));
  } catch (error) {
    console.log(error);
  }
};

start();
