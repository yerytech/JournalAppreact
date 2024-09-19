import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "checking", //"checking", //'not-authenticated','aythenticated'
    uid: null,
    email: null,
    displayName: null,
    photoUrl: null,
    errorMessage: null,
  },
  reducers: {
    login: (state, { payload }) => {
      state.status = "authenticated"; //"checking", //'not-authenticated','aythenticated'
      state.uid = payload.uid;
      state.email = payload.email;
      state.displayName = payload.displayName;
      state.photoUrl = payload.photoUrl;
      state.errorMessage = null;
    },
    logaut: (state, { payload }) => {
      state.status = "not-authenticated"; //"checking", //'not-authenticated','aythenticated'
      state.uid = null;
      state.email = null;
      state.displayName = null;
      state.photoUrl = null;
      state.errorMessage = payload?.errorMessage;
    },
    chekingCredentials: (state) => {
      state.status = "checking";
    },
  },
});
// Action creators are generated for each case reducer function
export const { login, logaut, chekingCredentials } = authSlice.actions;
