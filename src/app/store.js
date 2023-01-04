import { configureStore } from "@reduxjs/toolkit";
import postPreviewsReducer from "../features/postPreviews/postPreviewsSlice";
export const store = configureStore({
  reducer: {
    postPreviews: postPreviewsReducer,
  },
});
