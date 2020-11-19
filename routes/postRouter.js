const express = require("express");
const postRouter = express.Router();

postRouter.get("/create", (req, res, next) => {
  res.render("Card");
});

module.exports = postRouter;
