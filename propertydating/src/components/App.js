import { ConstProvider } from "../contexts/Context";
import { Routes, Route } from "react-router-dom";

import "../css/imports.css";
import SwipePage from "./pages/swipePage/SwipePage";
import Nav from "./nav/Nav";
export default function App() {
  return (
    <ConstProvider>
      <Routes>
        <Route path="/" element={<SwipePage />} />
      </Routes>
      <Nav />
    </ConstProvider>
  );
}
