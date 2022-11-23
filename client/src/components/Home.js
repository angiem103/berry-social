import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar';
import Display from './Display';
import "../index.css";

function Home({ currentUser, setCurrentUser }) {

    return (


        <div>
            <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser}/>
            <Display />
        </div>


    );
}

export default Home;



