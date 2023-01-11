import { configureStore } from "@reduxjs/toolkit";
import postPreviewsReducer from "../features/postPreviews/postPreviewsSlice";
import subredditsReducer from "../components/SideNav/sideNavSlice";
import currentPostReducer from "../features/currentPost/currentPostSlice";
import searchReducer from "../features/search/searchSlice";

export const store = configureStore({
  reducer: {
    postPreviews: postPreviewsReducer,
    subreddits: subredditsReducer,
    currentPost: currentPostReducer,
    search: searchReducer,
  },
});
