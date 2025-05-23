import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./common-reducers/rootReducer";
import { authApiCall } from "../screens/authentication/data-call/authApiCall";
import { commonApiCall } from "../app/commonApiCall";

// Combine the authApiCall.reducer with the rootReducer
const combinedReducer = {
  ...rootReducer,
  authApis: authApiCall.reducer,
  commonApiCall: commonApiCall.reducer,
};

const store = configureStore({
  reducer: combinedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }).concat(authApiCall.middleware, commonApiCall.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
