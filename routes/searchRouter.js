const express = require("express");
const searchRouter = express.Router();
const User = require("./../models/User.model");

searchRouter.get("/", (req, res, next) => {
  const { username } = req.query;

  User.findOne({ username })
    .populate("posts")
    .then((user) => {
      const props = { user: user };
      res.render("UserPosts", props);
    })
    .catch((err) => console.log(err));
});

module.exports = searchRouter;

// req.query
