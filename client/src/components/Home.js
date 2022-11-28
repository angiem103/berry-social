import React from 'react';
import NavBar from './NavBar';
import Events from './Events';
import "../index.css";

function Home({ currentUser, setCurrentUser }) {

    return (


        <div>
            <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser}/>
            <Events />
        </div>


    );
}

export default Home;



