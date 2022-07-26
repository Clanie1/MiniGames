import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Navigation from "./components/Navigation";
import Wordle from "./screens/Wordle";
import Minesearcher from "./screens/Minesearcher";
import Sudoku from "./screens/Sudoku";
import { useEffect } from "react";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wordle" element={<Wordle />} />
          <Route path="/mines" element={<Minesearcher />} />
          <Route path="/sudoku" element={<Sudoku />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
