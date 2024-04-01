import { createSlice } from "@reduxjs/toolkit";

const state = {
  auth: false,
  loggedIn: false,
  menu:false
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
    showMenu: (state) => {
      state.menu = true;
    },
    hideMenu: (state) => {
      state.menu = false;
    },
    login: (state) => {
      state.loggedIn = true;
    },
    logout: (state) => {
      state.loggedIn = false;
    },
  },
});
export const { showAuth, hideAuth, login, logout, showMenu,hideMenu } = toggleSlice.actions;
export default toggleSlice.reducer;
