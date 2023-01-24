import React, { useContext } from "react";
import { InfoContext } from "../App";
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import "react-big-calendar/lib/css/react-big-calendar.css";

function EventCalendar() {

    const localizer = momentLocalizer(moment)
    const {events} = useContext(InfoContext)

    console.log(events)

    return (
        <div>
        <Calendar
            localizer={localizer}
            events={events}
            startAccessor={(event) => { return moment(event.start_date + event.start_time) }}
            endAccessor={(event) => { return moment(event.end_date)  }}
            style={{ height: 500, marginLeft: "25%"}}
        />
        </div>
    );

};

export default EventCalendar;