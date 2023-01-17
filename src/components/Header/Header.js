import React from "react";
import SearchBar from "../../features/search/SearchBar";
import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
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

    // Replace ^ with code below, update CSS

    /* <header className="header">
    <nav>
      <ul>
        <li><Link to="/">
            <i className="fa-brands fa-reddit fa-2xl"></i>
          </Link>
        </li>
        <Link to="/">
        <li className="reddit">exploreddit</li>
        </Link>
      </ul>
    </nav>
</header> */
  );
};

export default Header;
