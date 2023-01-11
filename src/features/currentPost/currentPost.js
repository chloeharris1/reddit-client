import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loadCurrentPost,
  isLoading,
  selectCurrentPost,
} from "./currentPostSlice";
import FullPost from "../../components/FullPost";

const CurrentPost = () => {
  const dispatch = useDispatch();
  const currentPost = useSelector(selectCurrentPost);
  const isLoadingCurrentPost = useSelector(isLoading);

  useEffect(() => {
    dispatch(loadCurrentPost());
  }, [dispatch]);

  return (
    <>
      <FullPost />;
    </>
  );
};

export default CurrentPost;
