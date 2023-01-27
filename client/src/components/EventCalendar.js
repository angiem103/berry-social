import React, { useContext } from "react";
import { InfoContext } from "../App";
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import "react-big-calendar/lib/css/react-big-calendar.css";
import "../index.css"

function EventCalendar() {

    const localizer = momentLocalizer(moment)
    const {events} = useContext(InfoContext)

    console.log(events)

    return (
        <div className='calendar-background'>
            <div>
        <Calendar
            localizer={localizer}
            events={events}
            startAccessor={(event) => { return moment(event.start_date + event.start_time) }}
            endAccessor={(event) => { return moment(event.end_date + event.end_time) }}
            style={{ height: 500 ,  backgroundColor: "white", width:'850px', fontFamily: "sans-serif"}}
        />
        </div>
        </div>
    );

};

export default EventCalendar;