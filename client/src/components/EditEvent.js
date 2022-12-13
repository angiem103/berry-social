import React from 'react'
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../index.css"


function EditEvent ( { events } ) {

    const params = useParams();
    const event = events.find((event) => event.id == params.id)
   

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [budget, setBudget] = useState('');
    const [currentCost, setCurrentCost] = useState('');
    const [startDate, setStartDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endDate, setEndDate] = useState('');
    const [endTime, setEndTime] = useState('');

    function getTime(eventTime) {

        const time = eventTime.split('T')[1];
        const hour = time.split(':')[0];
        const minutes = time.split(':')[1];
        let timeValue = '';
        if (hour > 0 && hour <= 12) {
            timeValue= "" + hour
          } else if (hour > 12) {
            timeValue= "" + (hour - 12);
          } else if (hour == 0) {
            timeValue= "12"
          }

        const standardTime = timeValue + ':' + minutes;
        const dayNight =  timeValue = (hour >= 12) ? " P.M." : " A.M.";

        return standardTime + dayNight;

    }


    console.log(name)


  return event ? (

        <div className='edit-background'>
         <form className="edit-form" >
             <div className="edit-title">Edit Event</div>
             <div className="input-container ic0">
                <input id="name" className="input" type="text"  defaultValue={event.name} onChange={(e) => setName(e.target.value)}/>
                <label className="edit-cut edit-cut-short">Name</label>
            </div>

            <div className="input-container ic0">
                <input id="location" className="input" type="text" defaultValue={event.location} onChange={(e) => setLocation(e.target.value)}/>
                <label className="edit-cut edit-cut-short">Location</label>
            </div>
            <div className="input-container ic0">
                <input id="current-cost" className="input" type="integer"  defaultValue={event.current_cost} onChange={(e) => setCurrentCost(e.target.value)}/>
                <label className="edit-cut edit-cut-short">Current Cost</label>
            </div>
            <div className="input-container ic0">
                <input id="start-date" className="input" type="text" defaultValue={event.start_date} onChange={(e) => setStartDate(e.target.value)}/>
                <label className="edit-cut edit-cut-short">Start Date</label>
            </div>
            <div className="input-container ic0">
                 <input id="start-time" className="input" type="text" defaultValue={getTime(event.start_time)} onChange={(e) => setStartTime(e.target.value)}/>
                <label className="edit-cut edit-cut-short">Start Time</label>
            </div>
            <div className="input-container ic0">
                <input id="end-date" className="input" type="text" defaultValue={event.end_date} onChange={(e) => setEndDate(e.target.value)}/>
                <label className="edit-cut edit-cut-short">End Date</label>
            </div>
            <div className="input-container ic0">
                 <input id="end-time" className="input" type="text" defaultValue={getTime(event.end_time)} onChange={(e) => setEndTime(e.target.value)}/>
                <label className="edit-cut edit-cut-short">End Time</label>
            </div>
            <div className="input-container ic0">
                <input id="desc" className="input" type="text" defaultValue={event.description} onChange={(e) => setDescription(e.target.value)}/>
                <label className="edit-cut edit-cut-short">Description</label>
            </div>
            <div className="input-container ic0">
                <input id="budget" className="input" type="text" defaultValue={event.budget} onChange={(e) => setBudget(e.target.value)}/>
                <label className="edit-cut edit-cut-short">Budget</label>
            </div>
            <button type="submit" className="submit">Edit</button>
            <Link to={"/home"}>
                <button id='submit'>Cancel</button >
            </ Link>
         </form>
        </div>
        
    ) : null
};

export default EditEvent;