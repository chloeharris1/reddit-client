import moment from "moment";
import "./Comment.css";
import { MarkdownText } from "./MarkdownText";

const Comment = ({ comment }) => {
  return (
    <div className="comment-container">
      <div className="comment-data">
        <p className="comment-author">{comment.author}</p> |
        <span className="comment-created-time">
          {moment.unix(comment.created).fromNow()}
        </span>
      </div>
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
  );
};

export default Comment;
