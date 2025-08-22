const mongoose = require("mongoose");

// Subschema for a single note
const noteSchema = new mongoose.Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

// Main user schema with embedded notes
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  notes: [noteSchema],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
