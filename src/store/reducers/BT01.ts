import { createSlice } from "@reduxjs/toolkit";

const initialState: number = 1;

const countReducer = createSlice({
  name: "count",
  initialState,
  reducers: {
    increases: (state) => state + 1,
    decreases: (state) => state - 1,
    resets: (state) => (state = 0),
  },
});

// Export actions
export const { increases, decreases, resets } = countReducer.actions;
// Export reducer
export default countReducer.reducer;
