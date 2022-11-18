import React from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "../index.css";

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
      <div className='login-background'>
        <h1 id="berry-social">Berry Social</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="title">Login</div>
        <div className="input-container ic1">
        <input id="username" className="input" type="text" placeholder=" " value={username} onChange={(e) => setUsername(e.target.value)}/>
        <div className="cut cut-short"></div>
        <label htmlFor="username" className="placeholder">Username</label>
      </div>
      <div className="input-container ic2">
        <input id="password" className="input" type="text" placeholder=" " value={password} onChange={(e) => setPassword(e.target.value)}/>
        <div className="cut cut-short"></div>
        <label htmlFor="password" className="placeholder">Password</label>
      </div>
      <button type="submit" className="submit">Log In</button>
        <button className="submit" onClick={navigateToSignUp}>Sign Up</button>
      </form>
      </div>
    );
  }

  export default Login; 