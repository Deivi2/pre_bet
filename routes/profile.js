var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Bet = require('../models/bet');
var jwt = require('jsonwebtoken');
var StattleshipAPI = require('node-stattleship');

var stattleship = new StattleshipAPI('2d1000d4f7559cf7d170534633ddcd78');
var obj = [];

router.get('/', function (req, res, next) {

    var decoded = jwt.decode(req.query.token);


    Bet.find({user: decoded.user._id})
        .populate('user', 'email')
        .exec(function (err, bets) {
            var betsObj = [];

            if (err) {
                return res.status(500).json({
                    title: 'An error occured',
                    error: err
                })
            }
            res.status(200).json({
                bet: 'Success',
                bets: bets
            });
        });
});




module.exports = router;