import React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp({setUser}) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [first_name, setFirstName] = useState("")
    const [last_name, setLastName] = useState("")
    const [phone_number, setPhoneNumber] = useState("")
    const [email, setEmail] = useState("")

    const navigate = useNavigate()

    function handleSignUp(e) {
        e.preventDefault()
        const user = {
            username,
            password,
            first_name,
            last_name,
            phone_number,
            email
        }
        fetch(`/users`, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(r => {
            if(r.ok){
                r.json(setUser(user)).then(navigate('/'))
            } else {
                console.log("not valid")
            }
        })
    }

    return (
        <div>
         <form onSubmit={handleSignUp}>
            <p>Username</p>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
            <p>Password</p>
            <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <p>First Name</p>
            <input type="text"value={first_name} onChange={(e) => setFirstName(e.target.value)}/>
            <p>Last Name</p>
            <input type="text"value={last_name} onChange={(e) => setLastName(e.target.value)}/>
            <p>Phone Number</p>
            <input type="text"value={phone_number} onChange={(e) => setPhoneNumber(e.target.value)}/>
            <p>Email</p>
            <input type="text"value={email} onChange={(e) => setEmail(e.target.value)}/>
            <br />
            <button type="submit">Sign Up</button>
        </form>
        </div>
    );
}

export default SignUp;