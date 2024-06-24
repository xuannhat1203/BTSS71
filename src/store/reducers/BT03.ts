import { createSlice } from "@reduxjs/toolkit";

const initialState: boolean = false;

const changeStatusSlice = createSlice({
  name: "change",
  initialState,
  reducers: {
    change: (state) => !state,
  },
});

export const { change } = changeStatusSlice.actions;
export default changeStatusSlice.reducer;
