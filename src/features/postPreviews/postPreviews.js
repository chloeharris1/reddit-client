import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "../../components/Post";
import {
  loadAllPosts,
  isLoading,
  selectAllPreviews,
} from "./postPreviewsSlice";

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
        postPreviews.map((post) => <Post key={post.id} post={post} />)
      )}
    </>
  );
};

export default PostPreviews;
