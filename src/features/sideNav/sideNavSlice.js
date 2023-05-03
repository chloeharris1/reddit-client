import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Redux thunk that gets subreddits
export const getSubreddits = createAsyncThunk(
  "subreddits/getSubreddits",
  async () => {
    const response = await fetch("https://www.reddit.com/subreddits.json");
    const json = await response.json();
    // console.log(json);
    return json.data.children.map((subreddit) => subreddit.data);
  }
);

const initialState = {
  subreddits: [],
  isLoadingSubreddits: false,
  hasError: false,
};

export const subredditsSlice = createSlice({
  name: "subreddits",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getSubreddits.pending, (state) => {
        state.isLoadingSubreddits = true;
        state.hasError = false;
      })
      .addCase(getSubreddits.fulfilled, (state, action) => {
        state.isLoadingSubreddits = false;
        state.subreddits = action.payload;
      })
      .addCase(getSubreddits.rejected, (state, action) => {
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
