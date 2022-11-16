import React from "react";
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from "react";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Login from "./components/Login";

function App() {

  const [currentUser, setCurrentUser] = useState("");
  
  useEffect(() => {
    fetch('/auth')
    .then(r => {
      if(r.ok){
        r.json().then(user => setCurrentUser(user))
      }
    })
  }, [])


  if(!currentUser) return <Login onLogin={handleLogin}/>

  function handleLogin(user) {
    setCurrentUser(user)
  }

  function handleSetUser(user) {
    setCurrentUser(user)
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element ={<Home currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
        <Route path="signup" element={<SignUp setUser={handleSetUser}/>} />
      </Routes>
    </div>
  );
}

export default App;
