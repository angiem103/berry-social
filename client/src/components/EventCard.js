import React from 'react';
import "../Container.css";

function EventCard( { event }) {

    return (
        <div className='card'>
        <h1 className='title'>{event.name}</h1>
            
            <p>{event.start_date}</p>

      </div>
    )

}

export default EventCard;