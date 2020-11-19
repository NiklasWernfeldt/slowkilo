const express = require("express");
const authRouter = express.Router();
const bcrypt = require("bcrypt");

const User = require("./../models/User.model");

const saltRounds = 8;
const salt = bcrypt.genSaltSync(saltRounds);

// Your routes
authRouter.post("/signup", (req, res, next) => {
  const { username, password } = req.body;

  User.findOne({ username })
    .then((user) => {
      if (user) {
        const props = { errorMessage: "username already taken" };

        res.render("Home", props);
        return;
      }
    })
    .catch((err) => console.log(err));

  const hashedPassword = bcrypt.hashSync(password, salt);

  User.create({ username, password: hashedPassword }).then((createdUser) => {
    const props = { user: createdUser };
    res.render("Feed", props);
  });
});

module.exports = authRouter;
