const express = require("express");
const commentRouter = express.Router();
const isLoggedIn = require("../utils/isLoggedIn");
const Post = require("./../models/Post.model");

//commentRouter.post
commentRouter.post("/create/:id", isLoggedIn, (req, res, next) => {
  const userId = req.session.currentUser._id;
  const postId = req.params.id;
  const { comment } = req.body;
  const newComment = {
    comment: comment,
    author: userId,
  };
  Post.findByIdAndUpdate(
    postId,
    { $push: { comments: newComment } },
    { new: true }
  )
    .then((comment) => {
      res.redirect("/feed");
    })
    .catch((err) => console.log(err));
});

module.exports = commentRouter;
