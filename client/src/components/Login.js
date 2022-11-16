import React from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Login({ onLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")
  
    const navigate = useNavigate();

    function handleSubmit(e) {
      e.preventDefault();
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      })
        .then((r) => r.json())
        .then((user) => onLogin(user));
    }

    function navigateToSignUp () {
        navigate('/signup')
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <p>Username</p>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
        <p>Password</p>
        <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <br />
        <button type="submit">Login</button>
        <button onClick={navigateToSignUp}>Sign Up</button>
      </form>
    );
  }

  export default Login; 