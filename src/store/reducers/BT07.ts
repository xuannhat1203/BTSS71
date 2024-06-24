import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "A",
    favorite: false,
  },
  {
    id: 2,
    name: "B",
    favorite: true,
  },
  {
    id: 3,
    name: "C",
    favorite: false,
  },
];

const listUser = createSlice({
  name: "list",
  initialState,
  reducers: {
    changeFavorite: (state, action) => {
      const userId = action.payload;
      const user = state.find((item) => item.id === userId);
      if (user) {
        user.favorite = !user.favorite;
      }
    },
  },
});

export const { changeFavorite } = listUser.actions;
export default listUser.reducer;
