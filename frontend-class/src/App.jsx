import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Notes from "./components/Notes";
import AddNote from "./components/AddNote";
import "./App.css";
export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <h5 className="helper">
          If u click link up here that particular route will be rendered
        </h5>
        <Routes>
          <Route path="/" element={<Notes />} />
          <Route path="/add-note" element={<AddNote />} />
        </Routes>
      </div>
    </Router>
  );
}
