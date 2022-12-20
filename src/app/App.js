import "./App.css";
import React from "react";

// components
import NavBar from "../components/NavBar/NavBar";
import SideNav from "../components/SideNav/SideNav";
import PostPreviews from "../features/postPreviews/PostPreviews";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <SideNav />
      <PostPreviews />
    </div>
  );
}
