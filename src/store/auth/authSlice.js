import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "not-authenticated", //"checking", //'not-authenticated','aythenticated'
    uid: null,
    email: null,
    displayName: null,
    photoUrl: null,
    errorMesage: null,
  },
  reducers: {
    login: (state, action) => {},
    logaut: (state, payload) => {},
    chekingCredentials: (state) => {
      state.status = "checking";
    },
  },
});
// Action creators are generated for each case reducer function
export const { login, logaut, chekingCredentials } = authSlice.actions;
