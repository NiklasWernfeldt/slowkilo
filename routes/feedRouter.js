const express = require("express");
const feedRouter = express.Router();
const User = require("./../models/User.model");
const Post = require("./../models/Post.model");
const isLoggedIn = require("../utils/isLoggedIn");

//GET /feed

feedRouter.get("/", isLoggedIn, function (req, res, next) {
  Post.find()
    .sort({ created_at: "desc" })
    .populate("user")
    .then((post) => {
      const props = { post: post };
      res.render("Feed", props);
    })
    .catch((err) => console.log(err));
});

module.exports = feedRouter;
