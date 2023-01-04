import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <i className="fa-brands fa-reddit fa-2xl"></i>
        </li>
        <li className="reddit">exploreddit</li>
      </ul>
      <SearchBar />
    </nav>
  );
};

export default NavBar;
