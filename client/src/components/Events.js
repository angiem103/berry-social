import React from "react";
import EventCard from "./EventCard";
import "../Container.css";

function Events ( { currentUser } ) {

  const renderEvents = currentUser.clients ? currentUser.clients.map((client) => (
    
    <div key={client.id}>
      <EventCard client = {client} />
    </div>
  
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