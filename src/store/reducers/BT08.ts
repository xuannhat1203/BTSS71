import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    submitLogin: (state, action) => {
      const { name, email } = action.payload;
      state.name = name;
      state.email = email;
    },
    logout: (state) => {
      state.name = "";
      state.email = "";
    },
  },
});

export const { submitLogin, logout } = loginSlice.actions;
export default loginSlice.reducer;
