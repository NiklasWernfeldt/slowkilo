const express = require("express");
const feedRouter = express.Router();
const User = require("./../models/User.model");
const Post = require("./../models/Post.model");
const isLoggedIn = require("../utils/isLoggedIn");

//GET /feed

feedRouter.get("/", isLoggedIn, function (req, res, next) {
  const currentUserId = req.session.currentUser._id;
  Post.find()
    .sort({ created_at: "desc" })
    .populate("user comments.author")
    .then((post) => {
      User.findById(currentUserId)
        .populate("following")
        .then((user) => {
          const props = { post: post, user: user };
          res.render("Feed", props);
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
});

module.exports = feedRouter;
