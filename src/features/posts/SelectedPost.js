import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchPost } from "../../api/reddit";
import FullPost from "../../components/FullPost/FullPost";
import Comment from "../../components/Comment/Comment";
import "../../app/App.css";

const SelectedPost = () => {
  let { postId } = useParams();
  let [post, setPost] = useState({});
  let [comments, setComments] = useState([]);
  let [isLoading, setIsLoading] = useState(true);
  let [error, setError] = useState(false);

  useEffect(() => {
    fetchPost(postId)
      .then((response) => {
        console.log(response);
        setPost(response[0].data.children[0].data);
        setComments(
          response[1].data.children
            .filter((comment) => {
              return comment.kind !== "more";
            })
            .map((comment) => {
              return comment.data;
            })
        );
        setIsLoading(false);
      })
      .catch(() => {
        setError(true);
      });
  }, [postId, error]);

  return error ? (
    <p className="error">Hm, something went wrong.</p>
  ) : isLoading ? (
    <span className="loading">Loading...</span>
  ) : (
    <div className="selected-post">
      <FullPost key={post.id} post={post} />;
      <div className="comments-list">
        {comments.map((comment) => {
          return <Comment key={comment.id} comment={comment} />;
        })}
      </div>
    </div>
  );
};

export default SelectedPost;
