import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css"


function EditEvent ( {currentUser} ) {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [budget, setBudget] = useState('');
    const [currentCost, setCurrentCost] = useState('');
    const [startDate, setStartDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endDate, setEndDate] = useState('');
    const [endTime, setEndTime] = useState('');

    const navigate = useNavigate()

    console.log(currentUser)


  return (

        <div className='signup-background'>
         <form className="signup-form" >
             <div className="title">Edit Event</div>
             <div className="input-container ic1">
                <input id="firstname" className="input" type="text" placeholder=" " value={name} onChange={(e) => setName(e.target.value)}/>
                 <div className="cut"></div>
                <label htmlFor="firstname" className="placeholder">First name</label>
            </div>
            <div className="input-container ic2">
            <input id="description" className="input" type="text"  value={description} onChange={(e) => setDescription(e.target.value)} />
                <div className="cut"></div>
                <label htmlFor="description" className="placeholder">Description</label>
            </div>
            <div className="input-container ic2">
                <input id="location" className="input" type="text" value={location} onChange={(e) => setLocation(e.target.value)}/>
                <div className="cut cut-short"></div>
                <label htmlFor="location" className="placeholder">Location</label>
            </div>
            <div className="input-container ic2">
                <input id="current-cost" className="input" type="text"  value={currentCost} onChange={(e) => setCurrentCost(e.target.value)}/>
                <div className="cut cut-short"></div>
                <label htmlFor="currentCost" className="placeholder">Current Cost</label>
            </div>
            <div className="input-container ic2">
                <input id="start-date" className="input" type="text"  value={startDate} onChange={(e) => setStartDate(e.target.value)}/>
                <div className="cut cut-short"></div>
                <label htmlFor="start-date" className="placeholder">Start Date</label>
            </div>
                <div className="input-container ic2">
                 <input id="start-time" className="input" type="text" value={startTime} onChange={(e) => setStartTime(e.target.value)}/>
                <div className="cut cut-short"></div>
                <label htmlFor="start-time" className="placeholder">Start-Time</label>
            </div>
            <button type="submit" className="submit">Edit</button>
         </form>
        </div>
        
    );
};

export default EditEvent;