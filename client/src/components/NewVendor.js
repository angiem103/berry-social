import React, { useState, useContext }from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { InfoContext } from '../App';
import "../index.css"

function NewVendor () {

    const {vendors, setVendors, currentUser} = useContext(InfoContext);

    const [name, setName] = useState('');
    const [contactPerson, setContactPerson] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [desc, setDesc] = useState('');
    const [vendorErrors, setVendorErrors] = useState([]);
    

    const navigate = useNavigate()

  
    function handleNewVendor(e) {
        e.preventDefault()

        const newVendor = {
            user_id: currentUser.id,
            name: name,
            contact_person: contactPerson,
            phone_number: phoneNumber,
            email: email,
            desc_of_serv: desc,
        }
    
        fetch('/vendors', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(newVendor)
        })
        .then(r => {
            if(r.ok){
                r.json(setVendors([...vendors,newVendor])).then(navigate('/vendors'))
            } else {
                r.json().then(err => setVendorErrors(err.errors))
            }
        })
    }

    
      return (
    
            <div className='create-background'>
             <form className="new-vendor-form" onSubmit={handleNewVendor}>
                 <div className="edit-title">Vendor</div>
                 <div className="input-container ic0">
                    <input  id="name" className="input" type="text" onChange={(e) => setName(e.target.value)}/>
                    <label className="edit-cut edit-cut-short">Name</label>
                </div>
                <div className="input-container ic0">
                    <input id="contat-person" className="input" type="text"  onChange={(e) => setContactPerson(e.target.value)}/>
                    <label className="edit-cut edit-cut-short-vendor">Contact Person</label>
                </div>
                <div className="input-container ic0">
                    <input id="phone-number" className="input" type="text"  onChange={(e) => setPhoneNumber(e.target.value)}/>
                    <label className="edit-cut edit-cut-short-vendor">Phone Number</label>
                </div>
                <div className="input-container ic0">
                     <input id="email" className="input" type="text"  onChange={(e) => setEmail(e.target.value)}/>
                    <label className="edit-cut edit-cut-short">Email</label>
                </div>
                <div className="input-container ic0">
                    <input id="desc" className="input" type="text" onChange={(e) => setDesc(e.target.value)}/>
                    <label className="edit-cut edit-cut-short">Description</label>
                </div>
                <button type="submit" className="submit-small">Create Vendor</button>
                <Link to={"/vendors"}>
                    <button className='submit-small'>Cancel</button >
                </ Link>
                <br></br>
                <ul>
                    {vendorErrors.map((error) => <li>{error}</li>)}
                </ul>
             </form>
            </div>
            
        ) 


}

export default NewVendor;