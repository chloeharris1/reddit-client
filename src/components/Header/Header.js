import React from "react";
import SearchBar from "../../features/search/SearchBar";
import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav className="header">
      <ul className="home">
        <Link to="/">
          <li className="reddit">exploreddit</li>
        </Link>
        <li>
          <Link to="/">
            <i className="fa-brands fa-reddit-alien fa-2xl"></i>
          </Link>
        </li>
      </ul>
      <SearchBar />
    </nav>
  );
};

export default Header;
