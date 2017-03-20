import axios from "axios"
export function createGroup(dispatch) {
return  axios.get("/groups").then((response)=>{dispatch({type:"CREATE", element:response})})

}