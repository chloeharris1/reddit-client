import React from "react";
import "./SideNav.css";
// Will include populated subreddits

const SideNav = () => {
  return (
    <div className="side-nav">
      <nav className="navbar-menu">
        <h1 className="navbar-title">Subreddits</h1>
        {/* Map over subreddits to create list */}
        <div className="nav-list">
          <span>r/all</span>
          <span>r/sandiego</span>
          <span>r/losangeles</span>
          <span>r/seattle</span>
        </div>
      </nav>
    </div>
  );
};

export default SideNav;
