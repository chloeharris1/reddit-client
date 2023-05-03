import moment from "moment";
import { MarkdownText } from "../Comment/MarkdownText";
import { Link } from "react-router-dom";

const FullPost = ({ post }) => {
  let content;

  if (post.post_hint === "image") {
    content = (
      <div className="post-full-image">
        <img src={post.url} alt="post-media" />
      </div>
    );
  } else {
    content =
      post.thumbnail && post.thumbnail !== "default" ? (
        <a href={post.url} target="_blank" rel="noreferrer">
          <img src={post.thumbnail} alt="post-media" />
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

  let previewClass =
    post.post_hint !== "image" &&
    post.thumbnail &&
    post.thumbnail !== "default" &&
    !post.is_self
      ? "thumbnail-post"
      : "";

  return (
    <div className="post-container">
      <div className="vote-panel">
        <i className="fa-sharp fa-solid fa-angle-up fa-xl"></i>
        {post.score}
        <i className="fa-sharp fa-solid fa-angle-down fa-xl"></i>
      </div>
      <div className="post-body">
        <span className="post-details">
          <Link className="post-subreddit" to={`/${post.subreddit}`}>
            {post.subreddit_name_prefixed}
          </Link>
          <span>posted by {post.author}</span>
          <span>{moment.unix(post.created_utc).fromNow()}</span>
        </span>
        <div className={`full-post ${previewClass}`}>
          <h1 className="post-header">{post.title}</h1>
          <div className="post-content">
            {post.is_self ? <MarkdownText body={post.selftext} /> : content}
          </div>
        </div>
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

export default FullPost;
