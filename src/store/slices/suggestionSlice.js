import { createSlice } from "@reduxjs/toolkit";

const suggestionSlice = createSlice({
  name: "suggestion",
  initialState: {},
  reducers: {
    addSuggestion: (state, action) => {
      state = Object.assign(state, action.payload);
    },
  },
});
export const { addSuggestion } = suggestionSlice.actions;
export default suggestionSlice.reducer;
