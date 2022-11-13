import React from 'react';
import Login from "./Login";
import SignUp from "./SignUp";
import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

function Home() {

    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    function handleLogin(user) {
        setUser(user)
    }

    function navigateToSignUp () {
        navigate('/signup')
    }
    return (
        <div>

        <div>
            <h1>Hello!</h1>
            <Login onLogin={handleLogin}/>
            <button onClick={navigateToSignUp}>Sign Up</button>
        </div>


        </div>
    );
}

export default Home;