
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ChatgroupSchema = new Schema({
    name : String,
    date    : { type: Date, default: Date.now },
    messages: [{ type: Schema.Types.ObjectId, ref: 'messageChat' }]
});
module.exports = mongoose.model('groupChat', ChatgroupSchema);