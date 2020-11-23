const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    image: { type: String, required: true },
    title: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: "User" },
    description: String,
    date: Date,
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
