import React from "react";
import EventCard from "./EventCard";
import { useState, useEffect } from "react";
import "../Container.css";

function Events ( { currentUser } ) {

  const [events, setEvents] = useState ([])

  useEffect(() => {
    fetch("/events")
    .then(r => r.json())
    .then(setEvents)
  }, [])

  const renderEvents = events.map((event) => (
    <div key={event.id}>
      <EventCard event = {event} />
    </div>
  ));

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