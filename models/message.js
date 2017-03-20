
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MessageSchema = new Schema({
    author  : String,
    message : String,
    date    : { type: Date, default: Date.now }
});
module.exports = mongoose.model('messageChat', MessageSchema);