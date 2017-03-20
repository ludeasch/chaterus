import React from 'react';
import $ from 'jquery';
import { connect } from "react-redux";
import { createGroup } from "./action";
import axios from "axios"

@connect((store)=>{
   return {
       groups: store.statesChat
   }


})
class App extends React.Component {

   constructor(props) {
      super(props);
      this.handleChange  = this.handleChange.bind(this);
      this.createGroups = this.createGroups.bind(this);
   };

  componentWillMount(){
       axios.get("/groups").then((response)=>{this.props.dispatch({type:"CREATE", element:response})})

  }


  handleChange(event) {
    console.log(event);
    console.log(this.props.groups.name);
    this.props.dispatch({type:"TYPENAME", element:event.target.value})
  }
  getData(){
    console.log(this.store_state.getState())
    console.log(this.store.getState())

  }
  createGroups(){
    console.log(this.props.groups.name)
    axios.post("/groups",{name:this.props.groups.name}).then((response)=>{console.log(response);this.props.dispatch({type:"ADD",element:response})})
  }

   render() {
      const obj = this.props.groups;
      return (
         <div>
            <ul>
                {(obj.fetched)? obj.groups.map((group, i) => < GroupRow key={i} data={group}/>):""}
            </ul>
              <input type="text" onChange={this.handleChange} /><button onClick = {this.createGroups} >add group</button>
          </div>
      );
   }
}

class GroupRow extends React.Component {

   render() {
      const url = this.props.data._id;
      return (
         <li>
            <a href={"/"+url}>{this.props.data.name}</a>
         </li>
      );
   }
}

export default App;
