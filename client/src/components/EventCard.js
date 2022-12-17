import React from 'react';
import { Link } from 'react-router-dom'
import "../Container.css";

function EventCard( { event, onEventDelete }) {


    function handleEventDelete() {
        fetch(`/events/${event.id}`, {
            method: 'DELETE'
        })
        .then(()=> {
            onEventDelete(event)
        });
    }

    function getTime(eventTime) {

        const time = eventTime.split('T')[1];
        const hour = time.split(':')[0];
        const minutes = time.split(':')[1];
        let timeValue = '';
        if (hour > 0 && hour <= 12) {
            timeValue= "" + hour
          } else if (hour > 12) {
            timeValue= "" + (hour - 12);
          } else if (hour == 0) {
            timeValue= "12"
          }

        const standardTime = timeValue + ':' + minutes;
        const dayNight =  timeValue = (hour >= 12) ? " P.M." : " A.M.";

        return standardTime + dayNight;

    }

    return ( <div className='card' >
         <h1 className='title'>{event.name}</h1>
             <p>Client: {event.client.name}</p>
             <p>Date: {event.start_date}</p>
             <p>Time: {getTime(event.start_time)}</p>
             <p>Location: {event.location}</p>
             <p>Description: {event.description}</p>
             <br></br>
             <ul>
                Vendors:
                {event.vendors.map((vendor) => 
                <li key={vendor.id}>{vendor.name}</li>)}
             </ul>
             <Link to={`/events/${event.id}`}>
                 <button id='edit-button' >Edit</button >
             </ Link>
             <button id='delete-button' onClick={handleEventDelete}>Delete Event</button>
       </div>) 
     

 
    
}

export default EventCard;