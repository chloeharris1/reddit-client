import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchPost } from "../../api/reddit";

export const loadCurrentPost = createAsyncThunk(
  "currentPost/loadCurrentPost",
  async (postId) => {
    const response = await fetchPost(postId);
    const data = await response;
    console.log(data);
    // const post = data[0].data.children[0].data;
    // console.log(post);
    // const comments = data[1].data.children;
    // console.log(comments);
    // return { post, comments };
    return data;
  }
);

export const currentPostSlice = createSlice({
  name: "currentPost",
  initialState: {
    post: {},
    // added comments
    comments: [],
    isLoadingCurrentPost: false,
    hasError: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadCurrentPost.pending, (state) => {
        state.isLoadingCurrentPost = true;
        state.hasError = false;
      })
      .addCase(loadCurrentPost.fulfilled, (state, action) => {
        state.isLoadingCurrentPost = false;
        // updated
        state.post = action.payload[0].data.children[0].data;
        // added
        state.comments = action.payload[1].data.children;
      })
      .addCase(loadCurrentPost.rejected, (state, action) => {
        state.isLoadingCurrentPost = false;
        state.hasError = true;
        state.post = {};
        // Added below
        state.comments = [];
      });
  },
});

export const selectCurrentPost = (state) => state.currentPost.post;

export const isLoading = (state) => state.currentPost.isLoadingCurrentPost;

export default currentPostSlice.reducer;
