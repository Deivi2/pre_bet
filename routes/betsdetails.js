var express = require('express');
var router = express.Router();
var StattleshipAPI = require('node-stattleship');
var axios = require('axios');


/* GET home page. */
// router.get('/', function(req, res, next) {
//     res.send('hello details')
// });

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


module.exports = router;
