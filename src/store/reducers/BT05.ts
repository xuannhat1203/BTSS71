import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isVisible: false,
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.isVisible = !state.isVisible;
    },
  },
});

export const { toggleMenu } = menuSlice.actions;
export default menuSlice.reducer;
