import React from 'react';
import $ from 'jquery';
import { connect } from "react-redux";
import { createGroup } from "./action";
import axios from "axios"


@connect((store)=>{
   return {
       messages: store.statesMessage
   }


})
class AppMessage extends React.Component {

   constructor(props) {
      super(props);
      this.handleChange  = this.handleChange.bind(this);
      this.createMessage = this.createMessage.bind(this);
   };

    componentWillMount(){
       var url = window.location.pathname;
       var group_id = url.substring(url.lastIndexOf('/') + 1)
       axios.get("/message/" + group_id).then((response)=>{console.log(group_id);this.props.dispatch({type:"GETMESSAGE", element:response, id:group_id})})

    }

    componentWillReceiveProps(newProps) {
      console.log('Component WILL RECIEVE PROPS!')
   }

   shouldComponentUpdate(newProps, newState) {
      return true;
   }

   componentWillUpdate(nextProps, nextState) {
      console.log(nextProps)
      console.log(nextState)
      console.log('Component WILL UPDATE!');
   }

   componentDidUpdate(prevProps, prevState) {
      console.log('Component DID UPDATE!')
   }

   componentWillUnmount() {
      console.log('Component WILL UNMOUNT!')
   }

  handleChange(event){
    console.log(event);
    this.props.dispatch({type:"MESSAGE", payload:event.target.value})
  }
  createMessage(e){

    e.preventDefault();
    if(this.props.messages.message !=''){

      e.target.children[0].value = "";
      console.log(this.props);
      this.props.dispatch({type:'chat message', message:this.props.messages.message, group_id:this.props.messages.group_id})
    }
  }

   render() {
      const obj = this.props.messages;
      return (
         <div>
            <ul>
                {(obj.fetched)? obj.messages.map((message, i) => < MessageRow key={i} data={message}/>):""}
            </ul>
            <form onSubmit={this.createMessage} action="">
              <input id="mes" type="text" onChange={this.handleChange} /><button>Send</button>
            </form>
          </div>
      );
   }
}

class MessageRow extends React.Component {

   render() {
      const url = this.props.data._id;
      return (
        <li>
            <p>{this.props.data.message}</p>
        </li>
      );
   }
}

export default AppMessage;
