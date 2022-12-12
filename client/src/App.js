import React from "react";
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from "react";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import EditEvent from "./components/EditEvent";
import Events from "./components/Events";

function App() {

  const [currentUser, setCurrentUser] = useState("");
  const [clients, setClients] = useState([]);
  const [events, setEvents] = useState([])
  
  useEffect(() => {
    fetch('/auth')
    .then(r => {
      if(r.ok){
        r.json().then(user => {
          setCurrentUser(user)
          setClients(user.clients)
        }
          )
      }
    })
  }, [])

  useEffect(() => {
    fetch('/events')
    .then(r => {
      if(r.ok){
        r.json().then(events => setEvents(events)
          )
      }
    })
  }, [])

  function handleLogin(user) {
    setCurrentUser(user)
  }

  function handleSetUser(user) {
    setCurrentUser(user)
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/home" element ={<Home currentUser={currentUser} setCurrentUser={setCurrentUser} clients={clients}/>} />
        <Route path="/" element={<Login onLogin={handleLogin}/>} />
        <Route path="/signup" element={<SignUp setUser={handleSetUser}/>} />
        <Route path="/events/:id" element={<EditEvent events={events} />} />
      </Routes>

    </div>
  );
}

export default App;
