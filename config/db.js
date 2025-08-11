const mongoose = require("mongoose");

const connectToDb = async () => {
  await mongoose.connect(
    "mongodb+srv://fs-classes:fs-classes@fs-classes.w6glfk4.mongodb.net/?retryWrites=true&w=majority&appName=fs-classes"
  );
  console.log("connected to our mongoDB");
};

module.exports = connectToDb;
