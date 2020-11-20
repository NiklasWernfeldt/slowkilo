const express = require("express");
const feedRouter = express.Router();
const User = require("./../models/User.model");
const Post = require("./../models/Post.model");

feedRouter.get("/", (req, res, next) => {
  Post.find({}) // FIND WONT FORK
    .then((posts) => {
      console.log(posts);
      const props = { posts };
      res.render("Feed", props);
    })
    .catch((err) => console.log(err));
});

module.exports = feedRouter;
