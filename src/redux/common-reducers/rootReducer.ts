import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "..//..//screens/authentication/authSlice";
// Import your slices here
// import counterReducer from '../slices/counterSlice';
// import userReducer from '../slices/userSlice';

const rootReducer = combineReducers({
  // Add your reducers here
  // counter: counterReducer,
  // user: userReducer,
  authReducer,
});

export default rootReducer;
