import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchSubreddits } from "../../api/reddit";

// Redux thunk that gets subreddits
export const loadSubreddits = createAsyncThunk(
  "subreddits/loadSubreddits",
  async () => {
    const response = await fetchSubreddits();
    const data = await response;
    return data;
  }
);

export const subredditsSlice = createSlice({
  name: "subreddits",
  initialState: {
    subreddits: [],
    isLoadingSubreddits: false,
    hasError: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadSubreddits.pending, (state) => {
        state.isLoadingSubreddits = true;
        state.hasError = false;
      })
      .addCase(loadSubreddits.fulfilled, (state, action) => {
        state.isLoadingSubreddits = false;
        state.subreddits = action.payload;
      })
      .addCase(loadSubreddits.rejected, (state, action) => {
        state.isLoadingSubreddits = false;
        state.hasError = true;
        state.subreddits = [];
      });
  },
});

//selector that selects the posts in initial state
export const selectAllSubreddits = (state) => state.subreddits.subreddits;

export const isLoading = (state) => state.subreddits.isLoadingSubreddits;

// export reducer
export default subredditsSlice.reducer;
