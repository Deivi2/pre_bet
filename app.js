var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var appRoutes = require('./routes/app');
var betsRoutes = require('./routes/bets');
var betsRoutesDetails = require('./routes/bets-details');
var userAuth = require('./routes/userAuth');
var bets_played = require('./routes/bets-payed');
var bets_playing = require('./routes/bets-playing');
var bets_playing_today = require('./routes/bets-today');
var profile = require('./routes/profile');
var status = require('./routes/bet-status');


var app = express();
mongoose.connect('localhost:27017/bet-app');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With,content-type');

    // Pass to next layer of middleware
    next();
});

app.use('/status', status);
app.use('/profile', profile);
app.use('/nbabets', bets_playing_today);
app.use('/nbabets', bets_playing);
app.use('/nbabets', bets_played);

app.use('/user', userAuth);
app.use('/nbabets/:id', betsRoutesDetails);
app.use('/nbabets', betsRoutes);
app.use('/', appRoutes);

//app.use('/users', users);

//catch 404 and forward to error handler
app.use(function(req, res, next) {
  return res.render('index');
});


module.exports = app;
