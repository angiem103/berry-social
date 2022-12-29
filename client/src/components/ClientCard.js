import React from 'react';
import "../Container.css";

function ClientCard( { client, onClientDelete }) {

    function handleClientDelete() {
        fetch(`/clients/${client.id}`, {
            method: 'DELETE'
        })
        .then(()=> {
            onClientDelete(client)
        });
    }

    return (
        <div className='reg-card'>
        <h1 className='card-title'>{client.name}</h1>
            <p>Phone Number:{client.phone_number}</p>
            <p>Email: {client.email}</p>
            <button id='delete-button' onClick={handleClientDelete}>Delete Client</button>
      </div>
    )

}

export default ClientCard;