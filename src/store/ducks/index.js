import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router'

import character from "./character";


const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  character
})
export default createRootReducer