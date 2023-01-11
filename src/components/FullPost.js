import Comment from "./Comment/Comment";
import moment from "moment";
import { MarkdownText } from "./Comment/MarkdownText";

// Pull in comments data

const FullPost = ({ post, comments }) => {
  // 1/09/23
  let content;

  if (post.post_hint === "image") {
    content = (
      <div className="post-full-image">
        <img src={post.url} alt="media-preview" />
      </div>
    );
  } else {
    content =
      post.thumbnail && post.thumbnail !== "default" ? (
        <a href={post.url} target="_blank" rel="noreferrer">
          <img src={post.thumbnail} alt="media preview" />
        </a>
      ) : (
        <a
          className="post-link"
          href={post.url}
          target="_blank"
          rel="noreferrer"
        >
          {post.url}
        </a>
      );
  }
  return (
    <>
      <div className="full-post-container">
        <div className="vote-panel">
          <i className="fa-sharp fa-solid fa-angle-up fa-xl"></i>
          {post.score}
          <i className="fa-sharp fa-solid fa-angle-down fa-xl"></i>
        </div>
        <div className="post-body">
          <span className="post-details">
            {post.subreddit_name_prefixed} | posted by {post.author} |{" "}
            {moment.unix(post.created_utc).fromNow()}
          </span>
          <h1 className="post-header">{post.title}</h1>
          <div className="post-content">
            {post.is_self ? <MarkdownText body={post.selftext} /> : content}
          </div>
          <div className="comment-count">
            <i className="fa-regular fa-comment fa-xl"></i>
            <span>
              {post.num_comments}{" "}
              {post.num_comments === 1 ? "Comment" : "Comments"}
            </span>
          </div>
        </div>
        <div className="comments-list">
          {comments.map((comment) => {
            return <Comment key={comment.id} comment={comment} />;
          })}
        </div>
      </div>
    </>
  );
};

export default FullPost;
