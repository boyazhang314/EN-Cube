import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';

import Home from "./components/Home/Home"
import Info from "./components/Info/Info"
import Encrypt from "./components/Encrypt/Encrypt"
import Decrypt from "./components/Decrypt/Decrypt"

function App() {
  return (
    <div class="container">
    {/* Routes */}
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/info" element={<Info />} />
        <Route exact path="/encrypt" element={<Encrypt />} />
        <Route exact path="/decrypt" element={<Decrypt />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
