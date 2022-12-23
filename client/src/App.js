import React from "react";
import { Routes,  Route } from 'react-router-dom';
import { useState, useEffect } from "react";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import EditEvent from "./components/EditEvent";
import NewVendor from "./components/NewVendor";
import CostManager from "./components/CostManager";



function App() {

  const [currentUser, setCurrentUser] = useState("");
  const [events, setEvents] = useState([]);
  const [clients, setClients] = useState([]);
  const [vendors, setVendors] = useState ([]);
  const [active, setActive] = useState('Events');
  
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

  useEffect(() => {
    fetch("/vendors")
    .then(r => r.json())
    .then((vendors) => setVendors(vendors)
    )
  }, [])

  function handleLogin(user) {
    setCurrentUser(user)
  }

  function handleSetUser(user) {
    setCurrentUser(user)
  };

  function handleEditEvent(editedEvent) {
    const unchangedEvents = events.filter(event => event.id !== editedEvent.id)
    setEvents([...unchangedEvents,editedEvent])

  };

  function handleDeleteEvent(deletedEvent){
    const updatedEvents = events.filter((event) => event.id !== deletedEvent.id)
    setEvents([...updatedEvents])
  };

  function handleNewEvent(newEvent) {
    setEvents([...events,newEvent])
  };


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
        <Route path="/home" element ={<Home currentUser={currentUser} setCurrentUser={setCurrentUser} events={events} clients={clients} onEventDelete={handleDeleteEvent} setActive={setActive} active={active} addEvent={handleNewEvent} vendors={vendors}/>} />
        <Route path="/events/:id" element={<EditEvent events={events} clients={clients} vendors={vendors} onEditEvent={handleEditEvent} />} />
        <Route path="/newvendor" element={<NewVendor currentUser={currentUser} setActive={setActive}/>} />
        <Route path="/event_vendors/:id" element={<CostManager events={events}/>} />
      </Routes>

    </div>
  );
}

export default App;
