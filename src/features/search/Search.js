import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostPreview from "../../components/PostPreview/PostPreview";
import {
  getSearchResults,
  isLoading,
  selectResults,
  hasError,
} from "./searchSlice";
import { useSearchParams } from "react-router-dom";

const Search = () => {
  const searchResults = useSelector(selectResults);
  const isLoadingResults = useSelector(isLoading);
  const error = useSelector(hasError);
  const dispatch = useDispatch();
  // hook used to read and modify the query string in the URL for the current location
  let [searchParams] = useSearchParams();
  let term = searchParams.get("q");

  useEffect(() => {
    dispatch(getSearchResults(term));
  }, [dispatch, term]);

  return error ? (
    <p className="search-error">
      Hm... we couldn't find any results for {term}
    </p>
  ) : (
    <div className="subreddit-posts">
      {isLoadingResults ? (
        <span className="loading">Loading...</span>
      ) : (
        searchResults.map((post) => {
          return <PostPreview key={post.id} post={post} />;
        })
      )}
    </div>
  );
};

export default Search;
