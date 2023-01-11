import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostItem from "../../components/PostItem";
import {
  loadAllPosts,
  isLoading,
  selectAllPreviews,
} from "./postPreviewsSlice";
import { loadCurrentPost } from "../currentPost/currentPostSlice";

const PostPreviews = () => {
  const dispatch = useDispatch();
  const postPreviews = useSelector(selectAllPreviews);
  const isLoadingPreviews = useSelector(isLoading);

  useEffect(() => {
    dispatch(loadAllPosts());
  }, [dispatch]);

  return (
    <>
      {isLoadingPreviews ? (
        <span className="loading">Loading...</span>
      ) : (
        postPreviews.map((post) => (
          <div
            key={post.id}
            className="subreddit-posts"
            onClick={(e) => dispatch(loadCurrentPost(post.id))}
          >
            <PostItem key={post.id} post={post} />
          </div>
        ))
      )}
    </>
  );
};

export default PostPreviews;
