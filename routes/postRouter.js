const express = require("express");
const users = require("../bin/user-mock-data");
const postRouter = express.Router();
const isLoggedIn = require("./../utils/isLoggedIn");
const User = require("./../models/User.model");

postRouter.get("/", isLoggedIn, (req, res, next) => {
  User.find()
    .populate("posts")
    .then((users) => {
      console.log("users", users);
    })
    .catch((err) => console.log(err));

  res.render("Post");
});

module.exports = postRouter;

{
  /* done seed.js 
do the routes 
we have a problem with deployment 
pass */
}
