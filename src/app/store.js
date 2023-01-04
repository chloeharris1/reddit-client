import { configureStore } from "@reduxjs/toolkit";
import postPreviewsReducer from "../features/postPreviews/postPreviewsSlice";
import subredditsReducer from "../components/SideNav/sideNavSlice";

export const store = configureStore({
  reducer: {
    postPreviews: postPreviewsReducer,
    subreddits: subredditsReducer,
  },
});
