import authReducer from "@features/auth/userAuthSlice";
import cartReducer from "@features/cartBtn/cartBtnSlice";
import { combineReducers } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
  cart: cartReducer,
  auth: authReducer,
});
