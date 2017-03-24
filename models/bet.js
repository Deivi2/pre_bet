var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require('./user');


var schema = new Schema({
    game:{ type: String},
    team:{ type: String},
    bet:{ type: String},
    result:{ type: String},
    score:{ type: String},
    status:{ type: String},
    slug:{ type: String},
    user:{
        type: Schema.Types.ObjectId, ref: 'User'
    }

});

module.exports = mongoose.model('Bet', schema);