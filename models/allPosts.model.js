const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const allPostsSchema = new Schema({
  posts: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Post" }],
});

const allPosts = mongoose.model("allPost", allPostsSchema);

module.exports = allPosts;

/* FEED  - 
get all posts from friends 
*/
