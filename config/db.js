const mongoose = require("mongoose");

const connectToDb = async () => {
  await mongoose.connect("uri");

  console.log("connected to our mongoDB");
};

module.exports = connectToDb;
