import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { fetchResults } from "../../api/reddit";

export const loadSearchResults = createAsyncThunk(
  "search/loadSearchResults",
  async (term) => {
    const response = await fetch(
      `https://www.reddit.com/search.json?q=${term}`
    );
    const json = await response.json();
    return json.data.children.map((post) => post.data);
  }
);

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    term: "",
    results: [],
    isLoadingResults: false,
    hasError: false,
  },
  reducers: {
    // Add these into extraReducers?
    setTerm: (state, action) => {
      state.term = action.payload;
    },
    clearTerm: (state, action) => {
      state.term = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadSearchResults.pending, (state) => {
        state.isLoadingResults = true;
        state.hasError = false;
      })
      .addCase(loadSearchResults.fulfilled, (state, action) => {
        state.isLoadingResults = false;
        state.results = action.payload;
      })
      .addCase(loadSearchResults.rejected, (state, action) => {
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
