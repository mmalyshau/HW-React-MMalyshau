import { authReducer, cartReducer } from "@features";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  cart: cartReducer,
  auth: authReducer,
})

export default rootReducer;