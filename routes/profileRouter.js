const express = require("express");
const profileRouter = express.Router();
const users = require("../bin/user-mock-data");
const isLoggedIn = require("./../utils/isLoggedIn");
const session = require("express-session");
const User = require("./../models/User.model");
const Post = require("./../models/Post.model");


//GET /profile

profileRouter.get('/', isLoggedIn, function (req,res,next) {
    const { _id } = req.session.currentUser;
  User.findById(_id)
    .then((user) => {
       const props = { user: user };
       console.log(props)
       res.render("Profile", props);
     })
     .catch((err) => console.log(err));
 });


profileRouter.get('/edit', isLoggedIn, function (req,res,next){
    const { _id } = req.session.currentUser;
    User.findById(_id)
      .then((user) => {
         const props = { user: user };
         console.log(props)
         res.render("EditProfile", props);
       })
       .catch((err) => console.log(err));
   });

profileRouter.post('/edit', isLoggedIn, function(req,res,next) {
    const { _id } = req.session.currentUser;
    const {username, email, password} = req.body
    User.findByIdAndUpdate(_id,
        {username, email, password},
        {new : true}
  )
  .then((user) => res.redirect('/auth/login'))
  .catch((err) => console.error(err))
  })






module.exports = profileRouter;