// Model
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, unique: true },
  userImage: String,
  posts: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Post" }],
  email: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
