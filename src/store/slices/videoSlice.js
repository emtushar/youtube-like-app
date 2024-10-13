import { createSlice } from "@reduxjs/toolkit";
const videoSlice = createSlice({
  name: "video",
  initialState: {
    popularVideos: null,
    liveVideos: null,
    searchedResults: null,
  },
  reducers: {
    addPopularVideos: (state, action) => {
      state.popularVideos = action.payload;
    },
    addLiveVideos: (state, action) => {
      state.liveVideos = action.payload;
    },
    addSearchResults: (state, action) => {
      state.searchedResults = action.payload;
    },
    clearSearchResults: (state) => {
      state.searchedResults = null;
    },
  },
});

export const {
  addPopularVideos,
  addLiveVideos,
  addSearchResults,
  clearSearchResults,
} = videoSlice.actions;
export default videoSlice.reducer;
