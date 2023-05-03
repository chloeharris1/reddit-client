import "./App.css";
import { Routes, Route } from "react-router-dom";

// components
import Header from "../components/Header/Header";
import SideNav from "../features/sideNav/SideNav";
import PostsList from "../features/posts/PostsList";
import Search from "../features/search/Search";
import SelectedPost from "../features/posts/SelectedPost";

export default function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<PostsList />} />
          <Route path="/search" element={<Search />} />
          <Route path="/:subreddit" element={<PostsList />} />
          <Route path="/:subreddit/:postId" element={<SelectedPost />} />
        </Routes>
      </main>
      <SideNav />
    </div>
  );
}
