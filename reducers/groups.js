const objectAssign = require('object-assign');
export default function statesChat(state={
               fetched:false,
               feching:false,
               groups:[],
               name:""
               }, action){
        switch (action.type){
            case 'CREATE':
              console.log("emtrp")
              console.log(action.element)
              return {
                       name:"",
                       feching:false,
                       fetched:true,
                       groups:action.element.data}
            case 'ADD':
              console.log("setall")
              console.log(action.element)
              console.log("dos")

              return objectAssign({},state,{groups:state.groups.concat(action.element.data), name:""})
            case 'TYPENAME':
                console.log("typename")
                return objectAssign({},state,{name:action.element})
            default:
              return state
        }
}

