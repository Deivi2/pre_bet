var express = require('express');
var router = express.Router();
var User = require('../models/user');


    router.post('/register', function (req, res, next) {
        var user = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            password: req.body.password,
            email: req.body.email
        });

        user.save(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                })
            }
            res.status(201).json({
                message: 'user created',
                obj: result
            })
        })

    });




module.exports = router;
