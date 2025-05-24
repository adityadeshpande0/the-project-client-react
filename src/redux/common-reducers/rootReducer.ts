import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../../screens/authentication/authSlice";
import { authApiCall } from "../../screens/authentication/data-call/authApiCall";
import { commonApiCall } from "../../app/commonApiCall";

const rootReducer = combineReducers({
  authReducer,
  authApis: authApiCall.reducer,
  commonApiCall: commonApiCall.reducer,
});

export default rootReducer;
