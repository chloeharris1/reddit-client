import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./SideNav.css";
import { loadSubreddits, selectAllSubreddits } from "./sideNavSlice";

const SideNav = () => {
  const dispatch = useDispatch();
  const subreddits = useSelector(selectAllSubreddits);
  // const isLoadingSubreddits = useSelector(isLoading);

  useEffect(() => {
    dispatch(loadSubreddits());
  }, [dispatch]);

  return (
    <div className="side-nav">
      <nav className="navbar-menu">
        <h1 className="navbar-title">Subreddits</h1>
        <ul className="nav-list">
          {subreddits.map((subreddit) => (
            <li key={subreddit.id} subreddit={subreddit}>
              {subreddit.display_name}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SideNav;
