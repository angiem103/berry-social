import React from 'react';
import NavBar from './NavBar';
import Events from './Events';
import Vendors from './Vendors';
import { useState } from "react"

function Home({ currentUser, setCurrentUser, clients}) {

    const [active, setActive] = useState('Events')

    return (


        <div>
            <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser} setActive = {setActive}/>
            {active === "Events" && <Events clients={clients}/>}
            {active === "Vendors" && <Vendors />}
        </div>


    );
}

export default Home;



