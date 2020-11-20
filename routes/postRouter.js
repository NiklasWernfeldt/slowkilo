const express = require("express");
const postRouter = express.Router();

postRouter.get("/", (req, res, next) => {
  res.render("Post");
});

postRouter.get("/:id");

module.exports = postRouter;
