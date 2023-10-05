import Sidebar from "components/Sidebar";
import Navbar from "components/Navbar";
import BottomBar from "components/BottomBar";
import Content from "components/Content";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useRoutes } from "react-router-dom";
function App() {
  return (
    <>
      <div className="wrapper">
        <Sidebar />
        <Content />
      </div>
      <BottomBar />
    </>
  );
}

export default App;
