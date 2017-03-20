import { applyMiddleware, createStore } from 'redux'
import logger from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"
import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client';

import reducers from "./reducers"
let socket = io(":3000/");
let socketIoMiddleware = createSocketIoMiddleware(socket, "chat message");
const middleware  = applyMiddleware(promise(),thunk, logger(),socketIoMiddleware)
export default createStore(reducers, middleware);