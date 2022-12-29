import React from 'react';
import "../Container.css";

function VendorCard( { vendor, onVendorDelete }) {

    function handleVendorDelete() {
        fetch(`/vendors/${vendor.id}`, {
            method: 'DELETE'
        })
        .then(()=> {
            onVendorDelete(vendor)
        });
    }

    return (
        <div className='vendor-card'>
        <h1 className='card-title'>{vendor.name}</h1>
            <p>Contact: {vendor.contact_person}</p>
            <p>Phone Number:{vendor.phone_number}</p>
            <p>Email: {vendor.email}</p>
            <p>{vendor.desc_of_serv}</p>
            <button id='delete-button' onClick={handleVendorDelete}>Delete Vendor</button>
      </div>
    )

}

export default VendorCard;