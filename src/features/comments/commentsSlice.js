// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { fetchPostComments } from "../../api/reddit";

// Redux thunk that gets comments for each post
// export const loadCommentsForPostId = createAsyncThunk(
//   "comments/loadCommentsForPostId",
//   async () => {
//     const response = await fetchPostComments();
//     const data = await response;
//     return data;
//   }
// );

// export const commentsSlice = createSlice({
//   name: "comments",
//   initialState: {
//     comments: [],
//     isLoadingComments: false,
//     hasError: false,
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(loadCommentsForPostId.pending, (state) => {
//         state.isLoadingComments = true;
//         state.hasError = false;
//       })
//       .addCase(loadCommentsForPostId.fulfilled, (state, action) => {
//         state.isLoadingComments = false;
//         state.comments = action.payload;
//       })
//       .addCase(loadCommentsForPostId.rejected, (state, action) => {
//         state.isLoadingComments = false;
//         state.hasError = true;
//         state.comments = [];
//       });
//   },
// });

// export const selectComments = (state) => state.comments.comments;

// export const isLoading = (state) => state.comments.isLoadingComments;

// export default commentsSlice.reducer;
