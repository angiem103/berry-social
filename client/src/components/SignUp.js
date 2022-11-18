import React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css"


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

         <form className="signup-form" onSubmit={handleSignUp}>
             <div className="title">Sign Up</div>
            {/* <p>Username</p>
            <input class="input-container ic1" type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
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
            <br /> */}

  
   

      <div className="input-container ic1">
        <input id="firstname" className="input" type="text" placeholder=" " value={first_name} onChange={(e) => setFirstName(e.target.value)}/>
        <div className="cut"></div>
        <label htmlFor="firstname" className="placeholder">First name</label>
      </div>
      <div className="input-container ic2">
        <input id="lastname" className="input" type="text" placeholder=" " value={last_name} onChange={(e) => setLastName(e.target.value)} />
        <div className="cut"></div>
        <label htmlFor="lastname" className="placeholder">Last name</label>
      </div>
      <div className="input-container ic2">
        <input id="phonenumber" className="input" type="text" placeholder=" " value={phone_number} onChange={(e) => setPhoneNumber(e.target.value)}/>
        <div className="cut cut-short"></div>
        <label htmlFor="phonenumber" className="placeholder">Phone Number</label>
      </div>
      <div className="input-container ic2">
        <input id="email" className="input" type="text" placeholder=" " value={email} onChange={(e) => setEmail(e.target.value)}/>
        <div className="cut cut-short"></div>
        <label htmlFor="email" className="placeholder">Email</label>
      </div>
      <div className="input-container ic2">
        <input id="username" className="input" type="text" placeholder=" " value={username} onChange={(e) => setUsername(e.target.value)}/>
        <div className="cut cut-short"></div>
        <label htmlFor="username" className="placeholder">Username</label>
      </div>
      <div className="input-container ic2">
        <input id="password" className="input" type="text" placeholder=" " value={password} onChange={(e) => setPassword(e.target.value)}/>
        <div className="cut cut-short"></div>
        <label htmlFor="password" className="placeholder">Password</label>
      </div>

     

            <button type="submit" className="submit">Sign Up</button>
        </form>

    );
}

export default SignUp;