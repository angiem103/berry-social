import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../index.css"

function NewClient ( { currentUser, setActive, onNewClient} ) {


    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');

    const navigate = useNavigate()

  
    function handleNewClient(e) {
        e.preventDefault()

        const newClient = {
            user_id: currentUser.id,
            name: name,
            phone_number: phoneNumber,
            email: email,
        }
    
        fetch('/clients', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(newClient)
        })
        .then(r => r.json())
        .then(client => {
            onNewClient(client)
            setActive("Clients")
            navigate('/home')
        })

            
        }
    
    
    
      return (
    
            <div className='edit-background'>
             <form className="new-vendor-form" onSubmit={handleNewClient}>
                 <div className="edit-title">Client</div>
                 <div className="input-container ic0">
                    <input  id="name" className="input" type="text" onChange={(e) => setName(e.target.value)}/>
                    <label className="edit-cut edit-cut-short">Name</label>
                </div>
                <div className="input-container ic0">
                    <input id="phone-number" className="input" type="text"  onChange={(e) => setPhoneNumber(e.target.value)}/>
                    <label className="edit-cut edit-cut-short-vendor">Phone Number</label>
                </div>
                <div className="input-container ic0">
                     <input id="email" className="input" type="text"  onChange={(e) => setEmail(e.target.value)}/>
                    <label className="edit-cut edit-cut-short">Email</label>
                </div>
                <button type="submit" className="submit-small">Create Client</button>
                <Link to={"/home"}>
                    <button className='submit-small'>Cancel</button >
                </ Link>
             </form>
            </div>
            
        ) 


}

export default NewClient;