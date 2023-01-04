import moment from "moment";

const Post = ({ post }) => {
  return (
    <div className="post-container">
      <div className="vote-panel">
        <i className="fa-sharp fa-solid fa-angle-up fa-xl"></i>0
        <i className="fa-sharp fa-solid fa-angle-down fa-xl"></i>
      </div>
      <div className="post-body">
        <span className="post-details">
          r/sandiego | posted by Chloe |{" "}
          {moment.unix(post.created_utc).fromNow()}
        </span>
        <h1 className="post-header">{post.title}</h1>
        <div className="post-preview">{post.content}</div>
        <div className="comment-count">
          <i className="fa-regular fa-comment fa-xl"></i>
          <span>
            {post.num_comments}{" "}
            {post.num_comments === 1 ? "Comment" : "Comments"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Post;
