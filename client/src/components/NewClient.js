import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { InfoContext } from '../App';
import "../index.css"

function NewClient () {

    const {clients,setClients, currentUser} = useContext(InfoContext);

    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [clientErrors, setClientErrors] = useState([])

    const navigate = useNavigate()

  
    function handleNewClient(e) {
        e.preventDefault()

        const newClient = {
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
        .then(r => {
            if(r.ok){
                r.json() 
                .then(newC => {
                    setClients([...clients,newC])
                    navigate('/clients')
                })
                // r.json(setClients([...clients,newClient])).then(navigate('/clients'))
            } else {
                r.json().then(err => setClientErrors(err.errors))
            }
        })
        }
    
    
    
      return (
    
            <div className='create-background'>
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
                <Link to={"/clients"}>
                    <button className='submit-small'>Cancel</button >
                </ Link>
                <ul>
                    {clientErrors.map((error) => <li>{error}</li>)}
                </ul>
             </form>
            </div>
            
        ) 


}

export default NewClient;