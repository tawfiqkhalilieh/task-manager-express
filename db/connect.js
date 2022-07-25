const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://tawfiq:tawfiq@nodeexpressprojects.3iusj.mongodb.net/task-manager?retryWrites=true&w=majority";

const connectDB = (url) => {
  return mongoose.connect(connectionString, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
