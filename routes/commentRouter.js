const express = require("express");
const commentRouter = express.Router();
const isLoggedIn = require("../utils/isLoggedIn");
const Post = require("./../models/Post.model");

//commentRouter.post
commentRouter.post("/create/:id", isLoggedIn, (req, res, next) => {
  const postId = req.params.id;
  const { comment } = req.body;
  Post.findByIdAndUpdate(
    postId,
    { $push: { comments: comment } },
    { new: true }
  ) // ({ comments: [comment] })
    .then((comment) => {
      res.redirect("/feed");
    })
    .catch((err) => console.log(err));
});

module.exports = commentRouter;
