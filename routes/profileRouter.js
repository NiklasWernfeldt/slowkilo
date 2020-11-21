const express = require('express');
const profileRouter = express.Router();

//GET /profile

profileRouter.get('/', function (req,res,next) {
    res.render('Profile');
});



module.exports = profileRouter;