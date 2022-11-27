import React from 'react';
import { useNavigate } from 'react-router-dom';
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



