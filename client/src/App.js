import React from "react";
import { Routes,  Route } from 'react-router-dom';
import { useState, useEffect } from "react";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import EditEvent from "./components/EditEvent";
import NewEvent from "./components/NewEvent";



function App() {

  const [currentUser, setCurrentUser] = useState("");
  const [events, setEvents] = useState([])
  const [clients, setClients] = useState([])
  
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
  },[])

  useEffect(() => {
    fetch('/events')
    .then(r => {
      if(r.ok){
        r.json().then(events => setEvents(events)
          )
      }
    })
  },[])



  function handleLogin(user) {
    setCurrentUser(user)
  }

  function handleSetUser(user) {
    setCurrentUser(user)
  }

  function handleEditEvent(editedEvent) {
    const unchangedEvents = events.filter(event => event.id !== editedEvent.id)
    setEvents([...unchangedEvents,editedEvent])

  }

  function handleDeleteEvent(deletedEvent){
    const updatedEvents = events.filter((event) => event.id !== deletedEvent.id)
    setEvents([...updatedEvents])
  }

  function handleNewEvent(newEvent) {
    setEvents([...events,newEvent])
  }

  console.log(events)

  if (!currentUser) 
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Login onLogin={handleLogin}/>} />
      <Route path="/signup" element={<SignUp setUser={handleSetUser}/>} />
      </Routes>
    </div>
  )
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element ={<Home currentUser={currentUser} setCurrentUser={setCurrentUser} events={events} clients={clients} onEventDelete={handleDeleteEvent} addEvent={handleNewEvent}/>} />
        <Route path="/events/:id" element={<EditEvent events={events} clients={clients} onEditEvent={handleEditEvent} />} />
      </Routes>

    </div>
  );
}

export default App;
