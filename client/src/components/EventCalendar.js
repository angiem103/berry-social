import React, { useContext } from "react";
import { InfoContext } from "../App";
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import "react-big-calendar/lib/css/react-big-calendar.css";

function EventCalendar() {

    const localizer = momentLocalizer(moment)
    const {events} = useContext(InfoContext)

    return (
        <div>
        <Calendar
            localizer={localizer}
            events={events}
            startAccessor={(event) => { return moment(event.start_date).toDate() }}
            endAccessor={(event) => { return moment(event.end_time)  }}
            style={{ height: 500, marginLeft: "25%"}}
        />
        </div>
    );

};

export default EventCalendar;