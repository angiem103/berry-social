import React from 'react';
import { Link } from 'react-router-dom'
import "../Container.css";

function EventCard( { event, clients, onEventDelete }) {

    const client = clients.find((client) => client.id == event.client_id)

    function handleEventDelete() {
        fetch(`/events/${event.id}`, {
            method: 'DELETE'
        })
        .then(()=> {
            onEventDelete(event)
        });
    }

    return ( <div className='card' key={event.id}>
         <h1 className='title'>{event.name}</h1>
             <p>Client: {client.name}</p>
             <p>{event.start_date}</p>
             <p>Location: {event.location}</p>
             <p>{event.description}</p>
             <ul>
                Vendors:
                {event.vendors.map((vendor)=> {
                    <li>{vendor}</li>
                })}
             </ul>
             <Link to={`/events/${event.id}`}>
                 <button id='edit-button' >Edit</button >
             </ Link>
             <button id='delete-button' onClick={handleEventDelete}>Delete Event</button>
       </div>) 
     

 
    
}

export default EventCard;