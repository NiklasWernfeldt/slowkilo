const express = require("express");
const authRouter = express.Router();

const User = require("./../models/User.model");
const isLoggedIn = require("../utils/isLoggedIn");
const bcrypt = require("bcrypt");
const saltRounds = 10;

// Your routes
//Signup

authRouter.get("/signup", (req, res, next) => {
  res.render("Signup");
});

authRouter.post("/signup", (req, res, next) => {
  console.log(req.body);
  const { username, password, repeatPassword } = req.body;

  if (username === "" || password === "") {
    const props = { errorMessage: "Insert username and password" };

    res.render("Signup", props);
    return;
  }

  if (username !== repeatPassword) {
    const props = { errorMessage: "passwords not matching" };

    res.render("Signup", props);
    return;
  }

  User.findOne({ username })
    .then((user) => {
      if (user) {
        const props = { errorMessage: "username already taken" };

        res.render("Signup", props);
        return;
      } else {
      }
      const salt = bcrypt.genSaltSync(saltRounds);
      const hashedPassword = bcrypt.hashSync(password, salt);

      User.create({ username, password: hashedPassword })
        .then((createdUser) => {
          req.session.currentUser = createdUser;
          res.redirect("/feed");
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => next(err));
});

//Login
//GET /auth/login
authRouter.get("/login", (req, res, next) => {
  res.render("Login");
});

//POST /auth/login -
authRouter.post("/login", (req, res, next) => {
  const { username, password } = req.body;

  if (username === "" || password === "") {
    const props = { errorMessage: "Indicate username and password" };
    res.render("Login", props);
    return;
  }

  User.findOne({ username })
    .then((user) => {
      if (!user) {
        //when user doesn't exist give error message
        const props = { errorMessage: "Username doesn't exist" };
        res.render("Login", props);
        return;
      }

      const passwordCorrect = bcrypt.compareSync(password, user.password);

      if (passwordCorrect) {
        req.session.currentUser = user;
        res.redirect("/feed");
      } else {
        res.render("Login", { errorMessage: "Incorrect password" });
      }
    })
    .catch((err) => next(err));
});

//GET /auth/logout

authRouter.get("/logout", isLoggedIn, (req, res, next) => {
  req.session.destroy((err) => {
    if (err) {
      res.render("Profile");
    } else {
      res.redirect("/auth/login");
    }
  });
});

module.exports = authRouter;
