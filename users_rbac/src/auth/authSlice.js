import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  role: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const { role } = action.payload;
      console.log({role});
      state.isAuthenticated = true;
      state.role = role;
    },
    logout: (state) => {
      state.isAuthenticated = false;
    },
  },
});

export const {login, logout} = authSlice.actions

export default authSlice.reducer