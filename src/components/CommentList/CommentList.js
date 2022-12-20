import React from "react";
import Comment from "../Comment/Comment";
// List of comments

const CommentsList = () => {
  return (
    <div className="comments-list">
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </div>
  );
};

export default CommentsList;
