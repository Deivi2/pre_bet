var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Bet = require('../models/bet');
var jwt = require('jsonwebtoken');
var StattleshipAPI = require('node-stattleship');

var stattleship = new StattleshipAPI('2d1000d4f7559cf7d170534633ddcd78');

router.get('/game/:id/:betIda', function (req, res, next) {


    var games_array = [];
    var id = req.params.id;
    var decoded = jwt.decode(req.query.token);

    Bet.find({user: decoded.user._id})
        .populate('user')
        .exec(function (err, bets) {
            var betsObj = [];

            if (err) {
                return res.status(500).json({
                    title: 'An error occured',
                    error: err
                })
            }

            games_array.push(bets)

        });



    console.log("profile id: ",  req.params.id);
    console.log('idaaa', req.params.betIda);

    var params = {
        game_id: req.params.id
    };

    stattleship.game('basketball', 'nba', params).then(function (games) {
        games.forEach(function (element, index, array) {

            games_array.push({
                label: element.label,
                status: element.status,
                scoreline: element.scoreline,
                score: element.score,
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