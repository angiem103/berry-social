import React from "react";
import EventCard from "./EventCard";
import "../Container.css";

function Events ( { events, onEventDelete }) {

  const renderEvents = events.sort( (a,b) => a.id > b.id ? 1 : -1).map((event) => ( <EventCard key={event.id} event={event} onEventDelete={onEventDelete}/> ))

    return (
        <section className="twitter">
        <h1 className="header">Upcoming Events</h1>
        <div className="container">
          {renderEvents}
        </div>
      </section>
    )

}

export default Events;