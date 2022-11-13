import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element ={<Home/>} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
