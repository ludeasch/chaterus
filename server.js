var app = require('express')();
var express = require('express');
var http = require('http').Server(app);
var io = require('socket.io')(http);
var bodyParser  = require("body-parser");
var methodOverride = require("method-override");
var mongoose = require('mongoose');
var throttle = require('lodash.throttle');

mongoose.connect('mongodb://localhost/message', function(err, res) {
  if(err) {
    console.log('ERROR: connecting to Database. ' + err);
  }

});

var router = express.Router();

// Middlewares
var bodyParser = require('body-parser');
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(express.static(__dirname + '/'));
app.use(router);


var modelsM = require('./models/message')(app, mongoose);
var modelsG = require('./models/chatgroup')(app, mongoose);
var MessageCtrl = require('./controllers/chatgroup');
var Messages  = mongoose.model('messageChat');
var Chat  = mongoose.model('groupChat');

router.get('/', function(req, res){
  res.sendFile(__dirname + '/views/home.html');
});
router.route('/groups').get(MessageCtrl.findAllChatGroups).post(MessageCtrl.createChatGroups)
router.route('/message/:id').get(MessageCtrl.findAllChatMessage)

router.get('/:id', function(req, res){
  if(req.params.id != "message"){
    Chat.count({_id: req.params.id}, function (err, count){
      console.log(count);
      if(!count > 0){
        res.send(500, "Chat Group Doesn't exists");
      }
    });
  }
  res.sendFile(__dirname + '/views/groupChat.html');
});


// API routes
app.use('/api', router);

// listen message
io.on('connection', function(socket){
  // is event chat message
  socket.on('action', throttle(function(msg){
     if(msg.type === 'chat message'){
      var message = new Messages({ message:msg.message, author:"lucas"});
        message.save(function (err) {
            if(err) console.log("hubo error nene");
      })
      Chat.findById(msg.group_id, function(err, groupChat) {
        console.log(groupChat)
        console.log("miraaa")
        if(err) res.send(500, err.message);
        groupChat.messages.push(message);
        groupChat.save()


        io.emit('action', {type:"ADDMESSAGE",message:message, group_id:groupChat._id});
        });
    }
  },100))
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

//open server
http.listen(3000, function(){
  console.log('listening on *:3000');
});