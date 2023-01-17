import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../components/SideNav/SideNav.css";
import { getSubreddits, selectAllSubreddits } from "./sideNavSlice";
import { NavLink } from "react-router-dom";

const SideNav = () => {
  const dispatch = useDispatch();
  const subreddits = useSelector(selectAllSubreddits);
  // const isLoadingSubreddits = useSelector(isLoading);

  useEffect(() => {
    dispatch(getSubreddits());
  }, [dispatch]);

  return (
    <div className="subreddit-list">
      <nav className="sideNav-menu">
        <h1 className="sideNav-title">Subreddits</h1>
        <ul className="subreddit-links">
          {subreddits.map((subreddit) => {
            return (
              <NavLink key={subreddit.id} to={`/${subreddit.display_name}`}>
                <button type="button">
                  {subreddit.icon_img ? (
                    <img
                      className="subreddit-icon"
                      src={subreddit.icon_img}
                      alt="subreddit-icon"
                    />
                  ) : (
                    <div className="subreddit-icon"></div>
                  )}
                  <li key={subreddit.id} subreddit={subreddit}>
                    {subreddit.display_name}
                  </li>
                </button>
              </NavLink>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default SideNav;
