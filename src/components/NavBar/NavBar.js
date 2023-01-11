import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import "./NavBar.css";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <i className="fa-brands fa-reddit fa-2xl"></i>
          </Link>
        </li>
        <li className="reddit">exploreddit</li>
      </ul>
      <SearchBar />
    </nav>
  );
};

export default NavBar;
