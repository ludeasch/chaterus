import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppMessage from './components_message.jsx';
import store from "./store"

ReactDOM.render(
            <Provider store={store}>
                <AppMessage/>
            </Provider>, document.getElementById('messages'));





















// import Vue from"./libs/vue.js";
// Vue.use(require('vue-resource'));
// import io from 'socket.io-client';
//
//
 // var socket = io();
     // var vm = new Vue({
          // el: '#messages',
          // data:{
                // messages:[],
                // message:"",
                // group_id:""
          // },
//
          // mounted : function(){
            // this.getUrl();
            // this.getAllMessages();
          // },
          // methods:{
//
              // getAllMessages: function(){
                  // console.log(",mra")
                  // console.log(this.group_id)
                  // this.$http.get('/message/'+this.group_id).then(res =>{
                      // this.$set(this,"messages", res.body)
                  // });
              // },
              // createMessage: function(){
                  // if(this.message !=''){
                    // socket.emit('chat message',{message:this.message, group_id:this.group_id});
                  // }
                  // this.message = '';
              // },
              // getUrl: function(){
                  // var url = window.location.pathname;
                  // this.group_id = url.substring(url.lastIndexOf('/') + 1);
              // }
          // }
      // });
      // socket.on('chat message', function(msg){
          // if(msg.group_id == vm.group_id){
              // console.log("daisdujasdhadahdhadsshdhasd")
              // vm.messages.push(msg.message);
          // }
      // });

     //$(document).ready(function(){
          //$.ajax({
                //method: "GET",
                //url: "/message",
                //success:function(res){
                    //$.each(res, function( index, value ) {
//
                        //$('#messages').append($('<li>').text(value.message));
//
                    //});
                //}
          //});
      //});
//
//
//
//
//