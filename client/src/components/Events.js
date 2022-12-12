import React from "react";
import EventCard from "./EventCard";
import "../Container.css";

function Events ( { clients } ) {

  const renderEvents = clients ? clients.map((client) => (
    client ? (
    <div key={client.id}>
      <EventCard client = {client} />
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