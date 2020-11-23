const express = require("express");
const users = require("../bin/user-mock-data");
const postRouter = express.Router();
const isLoggedIn = require("./../utils/isLoggedIn");
const User = require("./../models/User.model");

postRouter.get("/", isLoggedIn, (req, res, next) => {
  const { _id } = req.session.currentUser;
  User.findById(_id)
    .populate("posts")
    .then((user) => {

       const props = { user: user };
       console.log('props', props);
       res.render("Posts", props);
     })
     .catch((err) => console.log(err));
 });



module.exports = postRouter;
