import { configureStore } from "@reduxjs/toolkit";

import subredditsReducer from "../features/sideNav/sideNavSlice";
import searchReducer from "../features/search/searchSlice";

export const store = configureStore({
  reducer: {
    subreddits: subredditsReducer,
    search: searchReducer,
  },
});
