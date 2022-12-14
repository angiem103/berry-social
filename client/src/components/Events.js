import React from "react";
import EventCard from "./EventCard";
import "../Container.css";

function Events ( { events, clients, onEventDelete } ) {

  const renderEvents = events ? events.map((event) => (
    event ? (
    <div key={event.id}>
      <EventCard event={event} clients={clients} onEventDelete={onEventDelete}/>
    </div>) : undefined
  
  ) ): undefined


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