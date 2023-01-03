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
import { createContext } from "react";


export const InfoContext = createContext();

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
      <InfoContext.Provider value={{events, clients, vendors}}>
      <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser}/>
      <Routes>
        <Route path="/clients" element={<Clients  onClientDelete={handleClientDelete} />}/>
        <Route path="/events" element={<Events onEventDelete={handleDeleteEvent} setEvents={setEvents}/>}/>
        <Route path="/newevent" element={<NewEvent addEvent={handleNewEvent} currentUser={currentUser} /> }/>
        <Route path="/vendors" element={<Vendors onVendorDelete={handleVendorDelete} />}/>
        <Route path="/events/:id" element={<EditEvent onEditEvent={handleEditEvent} />} />
        <Route path="/newvendor" element={<NewVendor currentUser={currentUser} onNewVendor={handleNewVendor}/>} />
        <Route path="/newclient" element={<NewClient currentUser={currentUser} onNewClient={handleNewClient} setEvents={setEvents}/>} />
        <Route path="/costmanager/:id" element={<CostManager/>} />
      </Routes>
      </InfoContext.Provider>
    </div>
  );
};

export default App;
