const express = require("express");
const feedRouter = express.Router();
const User = require("./../models/User.model");
const Post = require("./../models/Post.model");

//GET /feed

feedRouter.get("/", function (req, res, next) {
  Post.find()
    .populate("user")
    .then((posts) => {
      const props = { posts: posts };
      res.render("Feed", props);
    })
    .catch((err) => console.log(err));
});

module.exports = feedRouter;
