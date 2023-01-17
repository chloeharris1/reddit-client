import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { fetchResults } from "../../api/reddit";

export const getSearchResults = createAsyncThunk(
  "search/getSearchResults",
  async (term) => {
    const response = await fetch(
      `https://www.reddit.com/search.json?q=${term}`
    );
    // console.log(response);
    const json = await response.json();
    // console.log(json);
    return json.data.children.map((post) => post.data);
  }
);

const initialState = {
  term: "",
  results: [],
  isLoadingResults: false,
  hasError: false,
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setTerm: (state, action) => {
      state.term = action.payload;
    },
    clearTerm: (state, action) => {
      state.term = "";
    },
  },
  // extra reducers: accepts a builder parameter, which is an object that let's us
  // define additional case reducers that run in response to the actions defined
  // outside of the slice
  extraReducers: (builder) => {
    builder
      .addCase(getSearchResults.pending, (state) => {
        state.isLoadingResults = true;
        state.hasError = false;
      })
      .addCase(getSearchResults.fulfilled, (state, action) => {
        state.isLoadingResults = false;
        state.results = action.payload;
      })
      .addCase(getSearchResults.rejected, (state, action) => {
        state.isLoadingResults = false;
        state.hasError = true;
        state.results = [];
      });
  },
});

export const selectResults = (state) => state.search.results;

export const selectTerm = (state) => state.search.term;

export const isLoading = (state) => state.search.isLoadingResults;

export const hasError = (state) => state.search.hasError;
export default searchSlice.reducer;
// import these into the search bar / header?
export const { setTerm, clearTerm } = searchSlice.actions;
