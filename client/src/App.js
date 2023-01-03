import React from "react";
import { Routes,  Route } from "react-router-dom";
import { useState, useEffect } from "react";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import EditEvent from "./components/EditEvent";
import NewVendor from "./components/NewVendor";
import CostManager from "./components/CostManager";
import NewClient from "./components/NewClient";
import NavBar from "./components/NavBar";
import Events from "./components/Events";
import Clients from "./components/Clients";
import NewEvent from "./components/NewEvent";
import Vendors from "./components/Vendors";




function App() {

  const [currentUser, setCurrentUser] = useState("");
  const [events, setEvents] = useState([]);
  const [clients, setClients] = useState([]);
  const [vendors, setVendors] = useState ([]);
  
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
  },[]);

  useEffect(() => {
    fetch('/events')
    .then(r => {
      if(r.ok){
        r.json().then(events => setEvents(events)
          )
      }
    })
  },[]);

  useEffect(() => {
    fetch("/vendors")
    .then(r => r.json())
    .then((vendors) => setVendors(vendors)
    )
  }, []);

  function handleLogin(user) {
    setCurrentUser(user)
  };

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

  function handleNewVendor(newVendor) {
    setVendors([...vendors,newVendor])
  };

  function handleVendorDelete(deletedVendor){
    const updatedVendors = vendors.filter((vendor) => vendor.id !== deletedVendor.id)
    setVendors([...updatedVendors])
  };

  function handleClientDelete(deletedClient){
    const updatedClients = clients.filter((client) => client.id !== deletedClient.id)
    setClients([...updatedClients])
  };
  
  function handleNewClient(newClient) {
    setClients([...clients,newClient])
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
      <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser} setActive = {setActive}/>
      <Routes>
        <Route path="/clients" element={<Clients clients={clients} onClientDelete={handleClientDelete} />}/>
        <Route path="/events" element={<Events events={events} clients={clients} onEventDelete={handleDeleteEvent} setEvents={setEvents}/>}/>
        <Route path="/newevent" element={<NewEvent clients={clients} addEvent={handleNewEvent} currentUser={currentUser} /> }/>
        <Route path="/vendors" element={<Vendors vendors={vendors} onVendorDelete={handleVendorDelete} />}/>
        <Route path="/events/:id" element={<EditEvent events={events} clients={clients} vendors={vendors} onEditEvent={handleEditEvent} />} />
        <Route path="/newvendor" element={<NewVendor currentUser={currentUser} setActive={setActive} onNewVendor={handleNewVendor}/>} />
        <Route path="/newclient" element={<NewClient currentUser={currentUser} setActive={setActive} onNewClient={handleNewClient} events={events} setEvents={setEvents}/>} />
        <Route path="/costmanager/:id" element={<CostManager events={events} />} />
      </Routes>

    </div>
  );
};

export default App;
