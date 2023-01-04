import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchSubredditPosts } from "../../api/reddit";

// Redux thunk that gets posts
export const loadAllPosts = createAsyncThunk(
  "postPreviews/loadAllPosts",
  async () => {
    const response = await fetchSubredditPosts("all");
    const data = await response;
    return data;
  }
);

export const postPreviewsSlice = createSlice({
  name: "postPreviews",
  initialState: {
    posts: [],
    isLoadingPostPreviews: false,
    hasError: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadAllPosts.pending, (state) => {
        state.isLoadingPostPreviews = true;
        state.hasError = false;
      })
      .addCase(loadAllPosts.fulfilled, (state, action) => {
        state.isLoadingPostPreviews = false;
        state.posts = action.payload;
      })
      .addCase(loadAllPosts.rejected, (state, action) => {
        state.isLoadingPostPreviews = false;
        state.hasError = true;
        state.posts = [];
      });
  },
});

//selector that selects the posts in initial state
export const selectAllPreviews = (state) => state.postPreviews.posts;

export const isLoading = (state) => state.postPreviews.isLoadingPostPreviews;
// export reducer
export default postPreviewsSlice.reducer;
