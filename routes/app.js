var express = require('express');
var router = express.Router();
var User = require('../models/user');
var jwt = require('jsonwebtoken');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});


router.post('/', function (req, res, next) {
    User.findOne({email: req.body.email}, function (err,user) {
        if(err){
            return res.status(500).json({
                title: 'An error occured',
                error: err
            })
        }
        if(!user){
            return res.status(401).json({
                title: 'Login failed',
                error: {message: 'Invalid login credentials'}
            })
        }
        var token = jwt.sign({user: user}, 'secret' , {expiresIn: 7200});
        res.status(200).json({
            message: 'Sucesfuly logged in',
            token: token,
            userId: user._id,
            userEmail: user.email
        })

    });

});

module.exports = router;
