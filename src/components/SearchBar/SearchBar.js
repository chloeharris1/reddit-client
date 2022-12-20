import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="search-container">
      <div className="search-bar">
        <div className="inner-content">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input placeholder="Search" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
