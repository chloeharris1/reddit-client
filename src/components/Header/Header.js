import React from "react";
import SearchBar from "../../features/search/SearchBar";
import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/">
          <i className="fa-brands fa-reddit-alien fa-2xl header-icon"></i>
        </Link>
        <Link to="/">
          <h1 className="reddit">exploreddit</h1>
        </Link>
      </nav>
      <button className="dropdown">
        <i className="fa-sharp fa-solid fa-angle-down fa-xl header-icon dropdown"></i>
      </button>
      <SearchBar />
    </header>
  );
};

export default Header;
