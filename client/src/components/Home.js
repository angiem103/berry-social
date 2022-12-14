import React from 'react';
import NavBar from './NavBar';
import Events from './Events';
import Vendors from './Vendors';
import { useState } from "react"
import NewEvent from './NewEvent';

function Home({ currentUser, setCurrentUser, events, clients, onEventDelete }) {

    const [active, setActive] = useState('Events')

    return (


        <div>
            <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser} setActive = {setActive}/>
            {active === "Events" && <Events events={events} clients={clients} onEventDelete={onEventDelete} />}
            {active === "Vendors" && <Vendors />}
            {active === "NewEvent" && <NewEvent />}
        </div>


    );
}

export default Home;



