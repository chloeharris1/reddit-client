import React from "react";
import "./Comment.css";

// Individual comment

const Comment = () => {
  return (
    <div className="comment-container">
      <div className="comment-data">
        <p className="comment-author">Dayman_2022</p> |
        <p className="comment-created-time">10 hours ago</p>
      </div>
      <p>
        Diam sit amet nisl suscipit adipiscing bibendum. Felis donec et odio
        pellentesque diam volutpat commodo.
      </p>
    </div>
  );
};

export default Comment;
