import React from "react";
import EventCard from "./EventCard";
import { useState, useEffect } from "react";
import { useRevalidator } from "react-router-dom";
import "../Container.css";

function Events () {

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
        <div className="container">
          <p>Upcoming Events</p>
          {renderEvents}
        </div>
      </section>
    )

}

export default Events;