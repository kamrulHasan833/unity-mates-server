const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
  },
  user_type: {
    type: String,
    required: true,
    enum: ["ordinary", "premium"],
  },
  role: {
    type: String,
    required: true,
    enum: ["ordinary", "admin"],
  },
});

const UserModel = mongoose.model("User", schema);
module.exports = UserModel;
