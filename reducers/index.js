import { combineReducers } from 'redux'
import statesChat from './groups'
import statesMessage from './message'



export default combineReducers({
          statesChat,
          statesMessage
})