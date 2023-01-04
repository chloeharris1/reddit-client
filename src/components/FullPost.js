import React from "react";
// Full post modal w/ comments
// import commentsList file

import CommentsList from "./CommentList/CommentList";

const FullPost = () => {
  return (
    <div className="post-container">
      <div className="vote-panel">
        <i class="fa-sharp fa-solid fa-angle-up fa-xl"></i>0
        <i class="fa-sharp fa-solid fa-angle-down fa-xl"></i>
      </div>
      <div className="post-body">
        <span className="post-details">
          r/sandiego | posted by Chloe | 2 hours ago
        </span>
        <h1 className="post-header">
          Name a single movie, where the sequel or remake was better than the
          original.
        </h1>
        <div className="post-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div className="comment-count">
          <i class="fa-regular fa-comment fa-xl"></i>
          <span>365 Comments</span>
        </div>
        <CommentsList />
      </div>
    </div>
  );
};

export default FullPost;
