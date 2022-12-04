import React from 'react';
import { Link } from 'react-router-dom'
import "../Container.css";

function EventCard( { event }) {

    return (
        <div className='card'>
        <h1 className='title'>{event.name}</h1>
            <p>Client: {event.client}</p>
            <p>{event.start_date}</p>
            <p>Location: {event.location}</p>
            <p>{event.description}</p>
            <Link to={`/events/${event.id}`}>
                <button id='edit-button' >Edit</button >
            </ Link>
      </div>
    )

}

export default EventCard;