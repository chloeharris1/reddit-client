import moment from "moment";
import "./Comment.css";
import { MarkdownText } from "./MarkdownText";

const Comment = ({ comment }) => {
  console.log(comment);
  return (
    <div className="comment-container">
      <div className="comment-data">
        <button type="button">
          {comment.snoovatar_img ? (
            <img
              className="author-icon"
              src={comment.snoovatar_img}
              alt="author-icon"
            />
          ) : (
            <i className="fa-solid fa-user-astronaut"></i>
          )}
        </button>
        <p className="comment-author">{comment.author}</p>
        <span className="comment-created-time">
          {moment.unix(comment.created).fromNow()}
        </span>
      </div>
      <div className="comment-body">
        <MarkdownText body={comment.body} />
        {comment.replies &&
          comment.replies.data.children
            .filter((reply) => {
              return reply.kind !== "more";
            })
            .map((reply) => {
              return <Comment key={reply.data.id} comment={reply.data} />;
            })}
      </div>
    </div>
  );
};

export default Comment;
