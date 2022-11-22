import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar';
import Display from './Display';
import "../index.css";

function Home({ currentUser, setCurrentUser }) {

    const navigate = useNavigate()

    function handleLogOut() {
        navigate('/')
        fetch('/logout',{method: "DELETE"}).then((r) => {
            if(r.ok){
                setCurrentUser(null)
            }
        })
    };

    return (


        <div>
            <div className='homepage-title'>
            <h1>Hi {currentUser.first_name}</h1>
            <button onClick={handleLogOut}>Logout</button>
            </div>
            <NavBar />
            <Display />
        </div>


    );
}

export default Home;



