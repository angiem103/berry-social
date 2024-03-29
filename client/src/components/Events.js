import React, { useContext, useEffect } from "react";
import EventCard from "./EventCard";
import { InfoContext } from "../App";
import "../Container.css";


function Events ( { onEventDelete }) {
  
  const {events, setEvents, setVendors} = useContext(InfoContext);


  const renderEvents = events ? events.sort( (a,b) => a.id > b.id ? 1 : -1).map((event) => ( <EventCard key={event.id} event={event} onEventDelete={onEventDelete}/> ))  : null 

    return (
        <section className="background">
        <h1 className="header">Upcoming Events</h1>
        <div className="container">
          {renderEvents}
        </div>
      </section>
    )

}

export default Events;