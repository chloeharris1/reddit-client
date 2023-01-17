import React from "react";

import { setTerm, clearTerm, selectTerm } from "./searchSlice";
import { useNavigate, createSearchParams, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const SearchBar = () => {
  let term = useSelector(selectTerm);
  let dispatch = useDispatch();
  // this hook returns the location object from the current URL
  let location = useLocation();
  // this hook navigates to a particular URL (based on an action)
  let navigate = useNavigate();
  let handleTermChange = (e) => dispatch(setTerm(e.target.value));
  let viewSearchResults = (e) => {
    e.preventDefault();
    navigate({
      pathname: "search",
      search: `?${createSearchParams({
        q: term,
      })}`,
    });
  };

  useEffect(() => {
    if (location.pathname !== "/search") {
      dispatch(clearTerm());
    }
  }, [location, dispatch]);

  return (
    <div className="search-container">
      <div className="search-bar">
        <form className="inner-content" onSubmit={viewSearchResults}>
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            id="search-input"
            value={term}
            type="search"
            placeholder="Search"
            onChange={handleTermChange}
          />
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
