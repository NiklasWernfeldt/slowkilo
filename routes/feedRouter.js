const express = require('express');
const feedRouter = express.Router();

feedRouter.get("/feed", (req,res,next)  => {
    res.render('Feed');
})







module.exports = feedRouter;