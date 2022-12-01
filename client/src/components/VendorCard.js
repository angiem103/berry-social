import React from 'react';
import "../Container.css";

function VendorCard( { vendor }) {

    return (
        <div className='card'>
        <h1 className='title'>{vendor.name}</h1>
            <p>Contact: {vendor.contact_person}</p>
            <p>Phone Number:{vendor.phone_number}</p>
            <p>Email: {vendor.email}</p>
            <p>{vendor.desc_of_serv}</p>
      </div>
    )

}

export default VendorCard;