var express = require('express');
var router = express.Router();
var StattleshipAPI = require('node-stattleship');
var axios = require('axios');

var stattleship = new StattleshipAPI('2d1000d4f7559cf7d170534633ddcd78');

router.get('/played', function (req, res, next) {

    var games_array = [];
    var params = {
        status: "ended"
    };
    stattleship.games('basketball', 'nba', params).then(function (games) {

        games.forEach(function (element, index, array, err) {
            games_array.push({
                data: element.scoreline
            });
        });

        if (games_array) {
            //   console.log(games_array);
            res.setHeader('Content-Type', 'application/json');
            res.status(201).send(games_array);
        }
        else {
            return res.status(401).json({
                title: 'Not authenticated',
                error: err
            })
        }
    });
});





/* GET home page. */


module.exports = router;