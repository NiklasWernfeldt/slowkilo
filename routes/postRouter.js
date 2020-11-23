const express = require("express");
const postRouter = express.Router();
const users = require("../bin/user-mock-data");
const isLoggedIn = require("./../utils/isLoggedIn");
const session = require("express-session");
const User = require("./../models/User.model");
const Post = require("./../models/Post.model");

//GET /posts -currentUser posts
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


// GET /posts/create

postRouter.get('/create', isLoggedIn, (req,res,next)=>{
res.render('CreatePost')
})

//POST /posts/create

postRouter.get('/create', isLoggedIn, (req,res,next) => {
 
})




module.exports = postRouter;
