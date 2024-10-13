import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./slices/appSlice";
import videoSlice from "./slices/videoSlice";
import suggestionSlice from "./slices/suggestionSlice";
import liveChatSlice from "./slices/liveChatSlice";
const store = configureStore({
  reducer: {
    app: appSlice,
    video: videoSlice,
    suggestion: suggestionSlice,
    livechat: liveChatSlice,
  },
});

export default store;
