var express = require('express');
var router = express.Router();
var StattleshipAPI = require('node-stattleship');
var axios = require('axios');
var User = require('../models/user');
var Bet = require('../models/bet');
var jwt = require('jsonwebtoken');

router.get('/', function (req, res, next) {
    var games_array = [];
    var index;
    var stattleship = new StattleshipAPI('2d1000d4f7559cf7d170534633ddcd78');
    var params = {
        team_id: "nba-dal"
    };
    stattleship.team_game_logs('basketball', 'nba', params).then(function (team_game_logs) {
        team_game_logs.forEach(function (element, index, array, err) {
            games_array.push({
                slug: element.free_throws_percentage
            });
        });

        if (games_array) {
            //   console.log(games_array);
            res.setHeader('Content-Type', 'application/json');
            res.status(200)
                .send(JSON.stringify(games_arrays));

        }
        else {
            return res.status(401).json({
                title: 'Not authenticated',
                error: err
            })
        }
    });
});


router.post('/', function (req, res, next) {
    var decoded = jwt.decode(req.query.token);
    User.findById(decoded.user._id, function (err, user) {
        if (err) {
            return res.status(500).json({
                title: 'An error occured',
                error: err
            })
        }
        var bet = new Bet({
            game: req.body.game,
            team: req.body.team,
            bet: req.body.bet,
            result: req.body.result,
            score: req.body.score,
            status: req.body.status,
            slug: req.body.slug,
            user: req.body.userId
        });

        bet.save((err, result) => {
            if (err) {
                return res.stat(500).json({
                    title: 'An error occured',
                    error: err
                })
            }

            user.bets.push(result);
            user.save();

            res.status(201).json({
                message: 'Saved message',
                obj: result
            });
        });
    });
});


module.exports = router;
