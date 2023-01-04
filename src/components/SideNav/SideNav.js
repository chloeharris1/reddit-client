import React from "react";
import "./SideNav.css";
// Will include populated subreddits

const SideNav = () => {
  return (
    <div className="side-nav">
      <nav className="navbar-menu">
        <h1 className="navbar-title">Subreddits</h1>
        {/* Map over subreddits to create list */}
        <ul className="nav-list">
          <li>r/all</li>
          <li>r/sandiego</li>
          <li>r/losangeles</li>
          <li>r/seattle</li>
        </ul>
      </nav>
    </div>
  );
};

export default SideNav;
