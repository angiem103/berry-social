import React from 'react';
import NavBar from './NavBar';
import Events from './Events';
import Vendors from './Vendors';
import NewEvent from './NewEvent';

function Home({ currentUser, setCurrentUser, events, clients, vendors, onEventDelete, setActive, active, addEvent}) {

    return (


        <div>
            <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser} setActive = {setActive}/>
            {active === "Events" && <Events events={events} clients={clients} onEventDelete={onEventDelete}/>}
            {active === "Vendors" && <Vendors vendors={vendors}/>}
            {active === "NewEvent" && <NewEvent clients={clients} addEvent={addEvent} currentUser={currentUser} setActive={'Events'}/>}
        </div>


    );
}

export default Home;



