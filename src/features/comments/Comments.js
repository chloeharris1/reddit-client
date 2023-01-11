// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";

// import {
//   loadCommentsForPostId,
//   selectComments,
//   isLoading,
// } from "./commentsSlice";

// const Comments = () => {
//   const dispatch = useDispatch();
//   // const post = useSelector(selectCurrentPost) * see Redux newsreader comments.js
//   const comments = useSelector(selectComments);
//   const isLoadingComments = useSelector(isLoading);

//   useEffect(() => {
//     dispatch(loadCommentsForPostId());
//   }, [dispatch]);

//   return (
//     <>
//       <Comment />
//     </>
//   );
// };

// export default Comments;
