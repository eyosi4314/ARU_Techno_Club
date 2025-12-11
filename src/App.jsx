import { useState } from "react";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Index from "./pages/index";
import About from "./pages/about";
import Contact from "./pages/contact";
import Blog from "./pages/blog";
import Blogsingel from "./pages/blogsingle";
import Division from "./pages/division";
import Teacher from "./pages/teacher";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogsingel" element={<Blogsingel />} />
        <Route path="/division" element={<Division />} />
        <Route path="/teacher" element={<Teacher />} />
      </Routes>
    </Router>
  );
}

export default App;
