import React from 'react';
import NavBar from './NavBar';
import Events from './Events';
import { useState } from "react"

function Home({ currentUser, setCurrentUser }) {

    const 

    return (


        <div>
            <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser}/>
            <Events />
        </div>


    );
}

export default Home;



