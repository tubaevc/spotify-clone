import React from "react";
import Navbar from "components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from "views/Home";
import Search from "views/Search";
import Collection from "views/Collection";
function Content() {
  return (
    <main className="flex-auto">
      <Navbar></Navbar>
      <div className="px-8">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/collection" element={<Collection />}></Route>
        </Routes>
      </div>
      Content -text
    </main>
  );
}

export default Content;
