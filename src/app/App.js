import "./App.css";
// import React from "react";
import { Routes, Route } from "react-router-dom";

// components
import NavBar from "../components/NavBar/NavBar";
import SideNav from "../components/SideNav/SideNav";
import PostPreviews from "../features/postPreviews/PostPreviews";
// import CurrentPost from "../features/currentPost/CurrentPost";
// import FullPost from "../components/FullPost";
import Search from "../features/search/Search";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <SideNav />
      <main>
        <Routes>
          <Route path="/" element={<PostPreviews />} />
          <Route path="/search" element={<Search />} />
          {/* <FullPost /> */}
        </Routes>
      </main>
    </div>
  );
}
