import CookieHandler from "@component/helpers/cookieHandler";
import { createSlice } from "@reduxjs/toolkit";
import { useRouter } from "next/router";

const initialState = {
  isAuth: false,
};



const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuth = true;
      CookieHandler({ token: action.payload });
    },
    logout: (state) => {
      state.isAuth = false;
      document.cookie = "authToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    },
  },
});

export const { login, logout } = userSlice.actions;

export const userReducer = userSlice.reducer;
