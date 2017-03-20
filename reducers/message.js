const objectAssign = require('object-assign');
export default function statesMessage(state={fetched:false,feching:false,messages:[], message:"", group_id:""}, action){
        switch (action.type){
            case 'GETMESSAGE':
              return {
                       group_id:action.id,
                       message:"",
                       feching:false,
                       fetched:true,
                       messages:action.element.data}
            case 'ADDMESSAGE':
              return objectAssign({},state,{messages:state.messages.concat(action.message), message:""})
            case 'MESSAGE':
                console.log(state)
                return objectAssign({},state,{message:action.payload})
            default:
              return state
        }
}