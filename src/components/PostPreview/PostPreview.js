import moment from "moment";
import { Link } from "react-router-dom";

// Post content preview
const PostPreview = ({ post }) => {
  let content;
  // console.log(post);

  if (post.post_hint === "image") {
    content = (
      <div className="post-image">
        <img src={post.url} alt="media preview" />
      </div>
    );
  } else {
    // console.log(post.post_hint);
    // rel='noreferrer is a privacy enhancement for when you want to hide from the owner of the linked domain that the user came from your website.
    // source: https://stackoverflow.com/questions/50773152/when-should-i-use-rel-noreferrer
    // console.log(post.post_hint);
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

  let previewClass =
    post.post_hint !== "image" && post.thumbnail && post.thumbnail !== "default"
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
          <Link className="subreddit-link" to={`/${post.subreddit}`}>
            {post.subreddit_name_prefixed}
          </Link>
          | posted by {post.author} | {moment.unix(post.created_utc).fromNow()}
        </span>
        <div className={previewClass}>
          <Link to={`/${post.subreddit}/${post.id}`}>
            <h2 className="post-header">{post.title}</h2>
          </Link>
          <div className="post-preview">{post.is_self || content}</div>
        </div>
        <Link
          className="comment-count"
          to={`/${post.subreddit}/${post.id}#comments`}
        >
          <i className="fa-regular fa-comment fa-xl"></i>
          <span>
            {post.num_comments}{" "}
            {post.num_comments === 1 ? "Comment" : "Comments"}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default PostPreview;
