var mongoose = require('mongoose');
var Chatg  = mongoose.model('groupChat');
var Messa  = mongoose.model('messageChat');
var throttle = require('lodash.throttle');
//GET - Return all message in the DB
exports.findAllChatMessage = function(req, res) {
    Chatg.findById(req.params.id,function(err, chat) {
    if(err) res.send(500, err.message);
    Messa.find({
            '_id': { $in: chat.messages}
          }, function(err, docs){
             if(err) res.send(500, err.message);
             res.status(200).jsonp(docs);
        });

    });
};

//GET - Return all groups in the DB
exports.findAllChatGroups = function(req, res) {
    Chatg.find(function(err, chat) {
    if(err) res.send(500, err.message);
    res.status(200).jsonp(chat);
    });
};


exports.createChatGroups = throttle(function(req, res) {
    console.log(req.body);
    console.log(req);
    console.log("balbla");
    group = new Chatg({name: req.body.name})
    group.save(function(err, group) {
        if(err) return res.status(500).send( err.message);
        res.status(200).jsonp(group);
    });
},1000);