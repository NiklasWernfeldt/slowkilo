const express = require("express");
const postRouter = express.Router();
const User = require("../models/User.model");
const Post = require("../models/Post.model");
const isLoggedIn = require("../utils/isLoggedIn");

postRouter.get("/username", (req, res, next) => {
  const {_id} = req.session.currentUser;
  User.findById(_id)
    .populate('posts')
    .then((user)  => {
      console.log('user posts', user.posts);
    })
  

  res.render("Post");
});


module.exports = postRouter;
