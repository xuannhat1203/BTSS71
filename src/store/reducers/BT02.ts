import { createSlice } from "@reduxjs/toolkit";

const initialState: any = [];

const randomReducer = createSlice({
  name: "random",
  initialState,
  reducers: {
    buttonRandom: () => {
      const randomNumbers = Array.from({ length: 4 }, () =>
        Math.floor(Math.random() * 100)
      );
      return randomNumbers;
    },
  },
});

export const { buttonRandom } = randomReducer.actions;
export default randomReducer.reducer;
