import React, { useContext } from "react";
import { InfoContext } from "../App";
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import "react-big-calendar/lib/css/react-big-calendar.css";
import "../index.css"

function EventCalendar() {

    const localizer = momentLocalizer(moment)
    const {currentUser} = useContext(InfoContext)

    const parsedEvents = currentUser.events.map(event => {

        const startDate = new Date(event.start_date)
        const startTime = new Date(event.start_time)

        const endDate = new Date(event.end_date)
        const endTime = new Date(event.end_time)

        const start = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDay(), startTime.getHours(), startTime.getMinutes(), startTime.getSeconds())
        const end = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDay(), endTime.getHours(), endTime.getMinutes(), endTime.getSeconds())
        const e = {
            id : event.id,
            title : event.name,
            start,
            end,
        }
        return e
    })

    return (
        <div className='calendar-background'>
            <div>
        <Calendar
            localizer={localizer}
            events={parsedEvents}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 ,  backgroundColor: "white", width:'850px', fontFamily: "sans-serif"}}
        />
        </div>
        </div>
    );

};

export default EventCalendar;


