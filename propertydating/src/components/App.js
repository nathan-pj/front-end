import React from "react";
import { ConstProvider } from "../contexts/Context";
import { Routes, Route } from "react-router-dom";

import "../css/imports.css";
import HomePage from "./pages/homePage/HomePage";
import Nav from "./nav/Nav";
export default function App() {
  return (
    <ConstProvider>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </ConstProvider>
  );
}
