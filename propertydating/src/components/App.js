import { ConstProvider } from "../contexts/Context";
import { Routes, Route } from "react-router-dom";

import "../css/imports.css";
import SwipePage from "./pages/swipePage/SwipePage";
import TopNav from './nav/TopNav';
import Nav from "./nav/Nav";
export default function App() {
  return (
    <ConstProvider>
       <TopNav />
       <div className="main_container">
      <Routes>
          <Route path="/" element={<SwipePage />} />
      </Routes>
      </div>
      <Nav />
    </ConstProvider>
  );
}
