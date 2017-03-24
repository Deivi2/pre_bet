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


router.get('/o', function (req, res, next) {

    var games_array = [];

    var params = {
        game_id: 'nba-2016-2017-ny-mia-2017-03-31-2000'
    };

    stattleship.game('basketball', 'nba', params).then(function (games) {
        games.forEach(function (element, index, array) {

            games_array.push({
                label: element.label,
                status: element.status,
                score: element.scoreline,
                slug: element.slug
            });
            // console.log(element.slug);
            // console.log(element.label);
            // console.log(element.name);
            // console.log(element.scoreline);
            // console.log(element.status);

        });

        res.status(201).send(games_array)
    });
});


module.exports = router;