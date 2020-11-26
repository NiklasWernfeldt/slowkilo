// Model
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, unique: true },
  userImage: String,
  posts: [{ type: Schema.Types.ObjectId, ref: "Post" }],
  email: String,
  password: String,
  friends: [{ type: Schema.Types.ObjectId, ref: "User" }],
});

const User = mongoose.model("User", userSchema);

module.exports = User;

// add friends field in User model
// create a add button in UserPosts view
// create a router for adding friends which adds friends to the User model
//  Add a new view for friends posts
