import { createSlice } from "@reduxjs/toolkit";

const authTokenInitialState = {
  token: "",
};

const authSlice = createSlice({
  name: "authReducer",
  initialState: authTokenInitialState,
  reducers: {
    setAuthToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const selectAuthToken = (state: any) => state.authReducer.token;
export const { setAuthToken } = authSlice.actions;
export default authSlice.reducer;
