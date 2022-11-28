import React from 'react';
import "../Container.css";

function EventCard( {event }) {

    return (
        <div>{event.name}</div>
    )

}

export default EventCard;