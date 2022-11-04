import React from 'react';
import Login from "./Login";
import SignUp from "./SignUp";
import { useState } from "react";

function Home() {

    const [user, setUser] = useState(null);

    function handleLogin(user) {
        setUser(user)
    }
    return (
        <div>
            <h1>Hello!</h1>
            <Login onLogin={handleLogin}/>
            <SignUp />
        </div>
    );
}

export default Home;