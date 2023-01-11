import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostItem from "../../components/PostItem";
import {
  loadSearchResults,
  isLoading,
  selectResults,
  hasError,
} from "./searchSlice";
import { useSearchParams } from "react-router-dom";

const Search = () => {
  const dispatch = useDispatch();
  const searchResults = useSelector(selectResults);
  const isLoadingResults = useSelector(isLoading);
  //   const error = useSelector(hasError);
  // hook used to read and modify the query string in the URL for the current location
  let [searchParams] = useSearchParams();
  let term = searchParams.get("q");

  useEffect(() => {
    dispatch(loadSearchResults(term));
  }, [dispatch, term]);

  return hasError ? (
    <p className="search-error">
      Hm... we couldn't find any results for {term}
    </p>
  ) : (
    <div className="subreddit-posts">
      {isLoadingResults ? (
        <span className="loading">Loading...</span>
      ) : (
        searchResults.map((post) => {
          return <PostItem key={post.id} post={post} />;
        })
      )}
    </div>
  );
};

export default Search;
