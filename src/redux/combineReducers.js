import { combineReducers } from "redux";
import { reducer, wishlistReducer, cartReducer } from "./reducer";

const rootReducer = combineReducers({
  login: reducer,
  like: wishlistReducer,
  add: cartReducer 
})

export default rootReducer