import React, { useEffect, useState } from "react";
import PostPreview from "../../components/PostPreview/PostPreview";
import { useParams } from "react-router-dom";
import { fetchSubredditPosts } from "../../api/reddit";

const PostsList = () => {
  let { subreddit } = useParams();
  subreddit ||= "all";

  let [postPreviews, setPostPreviews] = useState([]);
  let [isLoading, setIsLoading] = useState(true);
  let [error, setError] = useState(false);

  useEffect(() => {
    fetchSubredditPosts(subreddit)
      .then((response) => {
        // console.log(response);
        setPostPreviews(response);
        setIsLoading(false);
      })
      .catch(() => {
        setError(true);
      });
  }, [subreddit, error]);

  return (
    <div className="posts-list">
      {isLoading ? (
        <span className="loading">Loading...</span>
      ) : (
        postPreviews.map((post) => (
          <article key={post.id} className="subreddit-posts">
            <PostPreview key={post.id} post={post} />
          </article>
        ))
      )}
    </div>
  );
};

export default PostsList;
