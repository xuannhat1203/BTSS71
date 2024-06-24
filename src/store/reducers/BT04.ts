import { createSlice } from "@reduxjs/toolkit";
const initialState: boolean = false;
const changeRow = createSlice({
  name: "row",
  initialState,
  reducers: {
    changes: (state) => !state,
  },
});
export const { changes } = changeRow.actions;
export default changeRow.reducer;
