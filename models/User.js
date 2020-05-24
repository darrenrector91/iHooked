const mongoose = require("mongoose");

mongoose.set("useCreateIndex", true);

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  avatar: { type: String },
  date: { type: Date, efault: Date.now() },
});

module.exports = User = mongoose.model("user", userSchema);
