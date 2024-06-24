import { createSlice } from "@reduxjs/toolkit";

const initialState = "en";

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    toggleLanguage: (state) => (state === "en" ? "vi" : "en"),
  },
});

export const { toggleLanguage } = languageSlice.actions;
export default languageSlice.reducer;
