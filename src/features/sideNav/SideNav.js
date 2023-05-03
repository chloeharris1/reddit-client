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

  // Array of space-themed subreddit names
  const spaceSubreddits = [
    "nasa",
    "spaceporn",
    "spaceflight",
    "space",
    "astronomy",
    "cosmology",
    "futurology",
    "telescopes",
    "askastronomy",
    "spaceexploration",
    "iss",
    "space_colonization",
    "astrophotography",
    "spaceflightporn",
    "spacevideos",
    "esa",
    "spacex",
    "moon",
    "mars",
    "curiosityrover",
  ];

  // function checkSubreddit(sub) {
  //   return sub === spaceSubreddits;
  // }

  // const filteredSubreddits = subreddits.filter(checkSubreddit);
  // console.log(filteredSubreddits);

  return (
    <nav className="side-nav">
      <h2>Subreddits</h2>
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
                    <i className="fa-regular fa-compass fa-2xl"></i>
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
