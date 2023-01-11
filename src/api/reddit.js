export const url = "https://www.reddit.com";

// Gets posts from a subreddit
export const fetchSubredditPosts = async (subreddit) => {
  const response = await fetch(`${url}/r/${subreddit}.json`);
  const json = await response.json();
  // console.log(json);

  return json.data.children.map((post) => post.data);
};

// Gets list of subreddits
export const fetchSubreddits = async () => {
  const response = await fetch(`${url}/subreddits.json?limit=10`);
  const json = await response.json();
  // console.log(json);

  return json.data.children.map((subreddit) => subreddit.data);
};

// Gets an individual post
export const fetchPost = async (postId) => {
  const response = await fetch(`${url}/comments/${postId}.json`);
  const json = await response.json();
  // console.log(json);
  return json;
};

// Gets results from search input
// export const fetchResults = async (term) => {
//   const response = await fetch(`${url}/search.json?q=${term}`);
//   const json = await response.json();
//   console.log("Testing");
//   return json.data.children.map((post) => post.data);
// };

// export const fetchPost = async (subreddit, postId) => {
//   const response = await fetch(`${url}/r/${subreddit}/comments/${postId}.json`);
//   const json = await response.json();
//   console.log(json);

//   return json;
// };
