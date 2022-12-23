import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function NewVendor ( { currentUser, setActive } ) {


    const [name, setName] = useState('');
    const [contactPerson, setContactPerson] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [desc, setDesc] = useState('');

    const navigate = useNavigate()

  
    function handleNewVendor(e) {
        e.preventDefault()

        const newVendor = {
            user_id: currentUser.id,
            name: name,
            contact_person: contactPerson,
            phone_number: phoneNumber,
            email: email,
            desc_of_serv: desc
        }
    
        fetch('/vendors', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(newVendor)
        })
        .then(r => r.json())
        .then(vendor => {
            // addVendor(vendor)
            setActive("Vendors")
            navigate('/home')
        })
            
        }
    
    
    
      return (
    
            <div className='edit-background'>
             <form className="new-event-form" onSubmit={handleNewVendor}>
                 <div className="edit-title">Vendor</div>
                 <div className="input-container ic0">
                    <input  id="name" className="input" type="text" onChange={(e) => setName(e.target.value)}/>
                    <label className="edit-cut edit-cut-short">Name</label>
                </div>
                <div className="input-container ic0">
                    <input id="contat-person" className="input" type="text"  onChange={(e) => setContactPerson(e.target.value)}/>
                    <label className="edit-cut edit-cut-short">Contact Person</label>
                </div>
                <div className="input-container ic0">
                    <input id="phone-number" className="input" type="text"  onChange={(e) => setPhoneNumber(e.target.value)}/>
                    <label className="edit-cut edit-cut-short">Phone Number</label>
                </div>
                <div className="input-container ic0">
                     <input id="email" className="input" type="text"  onChange={(e) => setEmail(e.target.value)}/>
                    <label className="edit-cut edit-cut-short">Email</label>
                </div>
                <div className="input-container ic0">
                    <input id="desc" className="input" type="text" onChange={(e) => setDesc(e.target.value)}/>
                    <label className="edit-cut edit-cut-short">Description</label>
                </div>
                <button type="submit" className="submit">Create Vendor</button>
                <Link to={"/home"}>
                    <button id='submit'>Cancel</button >
                </ Link>
             </form>
            </div>
            
        ) 


}

export default NewVendor;