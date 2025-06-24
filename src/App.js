import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // Whether dark mode is enabled or not

  useEffect(() => {
    if (mode === "light") {
      document.body.style.backgroundColor = "#e6e6ff";
    } else {
      document.body.style.backgroundColor = "#00001a";
    }
  }, [mode]); // Runs when mode changes, and once at start

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  return (
    <Router>
      <Navbar
        title="TextUtils"
        Home="Home"
        TextAbout="About"
        mode={mode}
        toggleMode={toggleMode}
      />
      <div className="container my-3">
        <Routes>
          <Route path="/about" element={<About mode={mode} />} />
          <Route path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode} />} />
          <Route path="*" element={<TextForm heading="Enter the text to analyze below" mode={mode} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
