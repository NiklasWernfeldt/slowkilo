const express = require("express");
const profileRouter = express.Router();
const users = require("../bin/user-mock-data");
const isLoggedIn = require("./../utils/isLoggedIn");
const session = require("express-session");
const User = require("./../models/User.model");
const Post = require("./../models/Post.model");
const parser = require("./../config/cloudinary");

//GET /profile

profileRouter.get("/", isLoggedIn, function (req, res, next) {
  const { _id } = req.session.currentUser;
  User.findById(_id)
    .then((user) => {
      const props = { user: user };
      console.log(props);
      res.render("Profile", props);
    })
    .catch((err) => console.log(err));
});

profileRouter.get("/edit", isLoggedIn, function (req, res, next) {
  const { _id } = req.session.currentUser;
  User.findById(_id)
    .then((user) => {
      const props = { user: user };
      console.log(props);
      res.render("EditProfile", props);
    })
    .catch((err) => console.log(err));
});

profileRouter.post(
  "/edit",
  isLoggedIn,
  parser.single("changeProfileImage"),
  function (req, res, next) {
    const { _id } = req.session.currentUser;
    const { username, email } = req.body;
    const updateQuery = {username, email};
    if (req.file) {
      updateQuery.userImage = req.file.secure_url;
    }
    User.findByIdAndUpdate(
      _id,
       updateQuery,
      { new: true }
    )
      .then((user) => res.redirect("/profile"))
      .catch((err) => console.error(err));
  }
);

profileRouter.get("/delete", isLoggedIn, (req, res, next) => {
  const { _id } = req.session.currentUser;
  User.findByIdAndDelete(_id)
    .then((user) => {
      res.redirect("/");
    })
    .catch((err) => console.log(err));
});

module.exports = profileRouter;
