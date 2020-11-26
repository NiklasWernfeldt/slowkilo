const express = require("express");
const followRouter = express.Router();
const User = require("./../models/User.model");
const Post = require("./../models/Post.model");
const isLoggedIn = require("../utils/isLoggedIn");

followRouter.get("/add/:id", isLoggedIn, (req, res, next) => {
  const userId = req.params.id;
  const currentUser = req.session.currentUser._id;
  User.findByIdAndUpdate(userId, { followers: currentUser }, { new: true })
    .then((user) => {
      User.findByIdAndUpdate(
        currentUser,
        { $addToSet: { following: userId } },
        { new: true }
      )
        .then((currentUser) => {
          res.redirect("/feed");
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
});


followRouter.get("/remove/:id", isLoggedIn, (req, res, next) => {
    const userId = req.params.id;
    const currentUser = req.session.currentUser._id;
    User.findByIdAndUpdate(userId, {$pull: {followers: currentUser }}, { new: true })
      .then((user) => {
        User.findByIdAndUpdate(
          currentUser,
          { $pull: { following: userId } },
          { new: true }
        )
          .then((currentUser) => {
            res.redirect("/feed");
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  });
  
module.exports = followRouter;
