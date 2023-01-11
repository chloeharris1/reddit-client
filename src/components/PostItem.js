import moment from "moment";

// Post content preview
const PostItem = ({ post }) => {
  let content;

  if (post.post_hint === "image") {
    content = (
      <div className="post-image">
        <img src={post.url} alt="media preview" />
      </div>
    );
  } else {
    // rel='noreferrer is a privacy enhancement for when you want to hide from the owner of the linked domain that the user came from your website.
    // source: https://stackoverflow.com/questions/50773152/when-should-i-use-rel-noreferrer
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
    <div className="post-container">
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
        <div className="post-preview">{content}</div>
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

export default PostItem;
