import React from 'react';
import { useState } from "react";

function SignUp() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    function handleSignUp(e) {
        e.preventDefault()

        const user = {
            username,
            password
        }

        fetch("/users",{
            method: "POST",
            header: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(user)
        }).then(r => {
            r.json()
            console.log(user)})
    
    }



    return (
        <div>
         <form onSubmit={handleSignUp}>
            <p>Username</p>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <p>Password</p>
            <input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Sign Up</button>
        </form>
        </div>
    );
}

export default SignUp;