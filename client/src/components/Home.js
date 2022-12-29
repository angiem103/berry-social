import React from 'react';
import NavBar from './NavBar';
import Events from './Events';
import Vendors from './Vendors';
import NewEvent from './NewEvent';
import Clients from './Clients';

function Home({ currentUser, setCurrentUser, events, clients, vendors, onEventDelete, setActive, active, addEvent, onVendorDelete, onClientDelete, setEvents}) {

    return (


        <div>
            <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser} setActive = {setActive}/>
            {active === "Events" && <Events events={events} clients={clients} onEventDelete={onEventDelete} setEvents={setEvents}/>}
            {active === "Vendors" && <Vendors vendors={vendors} onVendorDelete={onVendorDelete}/>}
            {active === "NewEvent" && <NewEvent clients={clients} addEvent={addEvent} currentUser={currentUser} setActive={'Events'}/>}
            {active === "Clients" && <Clients clients={clients} onClientDelete={onClientDelete} />}
        </div>


    );
}

export default Home;



