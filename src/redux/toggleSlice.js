import { createSlice } from "@reduxjs/toolkit";

const state = {
  auth: false,
  loggedIn: false,
};
export const toggleSlice = createSlice({
  name: "toggleSlice",
  initialState: state,
  reducers: {
    showAuth: (state) => {
      state.auth = true;
    },
    hideAuth: (state) => {
      state.auth = false;
    },
    login: (state) => {
      state.loggedIn = true;
    },
    logout: (state) => {
      state.loggedIn = false;
    },
  },
});
export const { showAuth, hideAuth, login, logout } = toggleSlice.actions;
export default toggleSlice.reducer;
