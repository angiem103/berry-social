import React from 'react';
import { Link } from 'react-router-dom'
import "../Container.css";

function EventCard( { client }) {
    

    return  client ? client.events.map(event => (
       ( <div className='card' key={event.id}>
        <h1 className='title'>{event.name}</h1>
            <p>Client: {client.name}</p>
            <p>{event.start_date}</p>
            <p>Location: {event.location}</p>
            <p>{event.description}</p>
            <Link to={`/events/${event.id}`}>
                <button id='edit-button' >Edit</button >
            </ Link>
      </div>) 
    )
   
   ) : undefined

}

export default EventCard;