import React from "react";
import Navbar from "components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "views/Home";
import Search from "views/Search";
import Collection from "views/Collection";
function Content() {
  return (
    <main className="flex-auto">
      <Navbar>
        <Routes>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/collection">
            <Collection />
          </Route>
        </Routes>
      </Navbar>
      Content -text
    </main>
  );
}

export default Content;
