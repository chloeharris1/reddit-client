import React from "react";
import "./Comment.css";

// Individual comment

const Comment = () => {
  return (
    <div className="comment-container">
      <div className="user-data">
        <span className="username">Dayman_2022</span> |
        <span className="post-time">10 hours ago</span>
      </div>
      <p>
        Diam sit amet nisl suscipit adipiscing bibendum. Felis donec et odio
        pellentesque diam volutpat commodo.
      </p>
    </div>
  );
};

export default Comment;
