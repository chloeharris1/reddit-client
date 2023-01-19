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
    <nav className="subreddit-list">
      <h3 className="sideNav-title">Subreddits</h3>
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
                  <div className="subreddit-icon">
                    <i class="fa-regular fa-compass fa-2xl"></i>
                  </div>
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
  );
};

export default SideNav;
