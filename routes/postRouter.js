const express = require("express");
const postRouter = express.Router();
const users = require("../bin/user-mock-data");
const isLoggedIn = require("./../utils/isLoggedIn");
const session = require("express-session");
const parser = require('./../config/cloudinary');
const User = require("./../models/User.model");
const Post = require("./../models/Post.model");

//GET /posts -currentUser posts
postRouter.get("/", isLoggedIn, (req, res, next) => {
  const { _id } = req.session.currentUser;
  User.findById(_id)
    .populate("posts")
    .then((user) => {
      const props = { user: user };
      res.render("Posts", props);
    })
    .catch((err) => console.log(err));
});

// GET /posts/create

postRouter.get("/create", isLoggedIn,  (req, res, next) => {
  res.render("CreatePost");
});

//POST /posts/create

postRouter.post("/create", parser.single('image'), isLoggedIn, (req, res, next) => {
  const {title, description} = req.body;
  const { _id } = req.session.currentUser
  const imageUrl = req.file.secure_url;
  const newPost = { image: imageUrl, title, description, user: _id}
  Post.create(newPost)
    .then((post) => {
      const {_id} = req.session.currentUser;
      User.findByIdAndUpdate(_id,
      {$push: {posts: post}},
      {new: true}
    )
    .then((user) => {
      res.redirect('/posts');
    }) 
    .catch((err) => console.error(err));
  })
})

//GET /posts/edit/:id

postRouter.get('/edit/:id', isLoggedIn, (req,res,next) => {
  const postId = req.params.id;
  Post.findById(postId)
    .then((post) =>{
      const props = {post: post};
      res.render('PostEdit', props)
    })
    .catch((err) => console.log(err));
})

//POST /posts/edit/:id

postRouter.post("/edit/:id", parser.single('image'), isLoggedIn, (req, res, next) => {
  const postId  = req.params.id;
  console.log(postId)
  const imageUrl = req.file.secure_url;
  const {title, description} = req.body;

  Post.findByIdAndUpdate(
    postId,
    { image: imageUrl, title, description },
    { new: true }
  )
    .then((post) => res.redirect("/posts"))
    .catch((error) => console.error(error));
});




//GET /posts/details/:id
postRouter.get('/details/:id', isLoggedIn, (req,res,next) => {
  const postId = req.params.id;
  Post.findById(postId)
    .then((post) =>{
      const props = {post: post};
      res.render('Details', props)
    })
    .catch((err) => console.log(err));
})



//GET posts/user/:id

postRouter.get('/user/:id', isLoggedIn, (req,res,next)=> {
  const userId = req.params.id;
  User.findById(userId)
    .populate('posts')
    .then((user) => {
      const props = { user: user };
      res.render("UserPosts", props);
    })
    .catch((err) => console.log(err));
});


module.exports = postRouter;
