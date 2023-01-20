import React, { useState, useContext } from 'react';
import { Link, useNavigate, useParams} from "react-router-dom";
import { InfoContext } from '../App';
import "../index.css"


function EditEvent () {
    
    const {events, vendors, setEvents} = useContext(InfoContext);

    const params = useParams();
    const event = events.find((event) => String(event.id) === params.id)
    const navigate = useNavigate();



   
    const [name, setName] = useState(event?.name ?? "");
    const [description, setDescription] = useState(event?.description ?? "");
    const [location, setLocation] = useState(event?.location ?? "");
    const [budget, setBudget] = useState(event?.budget ?? "");
    const [startDate, setStartDate] = useState(event?.start_date ?? "");
    const [startTime, setStartTime] = useState(event ? getTime(event.start_time) : "");
    const [endDate, setEndDate] = useState(event?.end_date ?? "");
    const [endTime, setEndTime] = useState(event ? getTime(event.end_time) : "");



    function getTime(eventTime) {

        const time = eventTime.split('T')[1];
        const hour = time.split(':')[0];
        const minutes = time.split(':')[1];
        let timeValue = '';
        if (hour > 0 && hour <= 12) {
            timeValue= "" + hour
          } else if (hour > 12) {
            timeValue= "" + (hour - 12);
          } else if (hour === 0) {
            timeValue= "12"
          }

        const standardTime = timeValue + ':' + minutes;
        const dayNight =  timeValue = (hour >= 12) ? " P.M." : " A.M.";

        return standardTime + dayNight;

    }


    function handleSubmitChanges(e) {
        e.preventDefault()


        const editedEvent = {
            name: name,
            description: description,
            start_date: startDate,
            start_time: startTime,
            end_date: endDate,
            end_time: endTime,
            locaiton: location,
            budget: budget,
            id: event.id,
            client_id: event.client.id,
        }


        fetch(`/events/${editedEvent.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(editedEvent)
        })
        .then(r => r.json())
        .then(editedEvent => {
            const unchangedEvents = events.filter(event => event.id !== editedEvent.id)
            setEvents([...unchangedEvents,editedEvent])
            navigate("/events")
        })
        
    }
        
    


  return event && vendors ? (

        <div className='edit-background'>
         <form className="edit-form" onSubmit={handleSubmitChanges}>
             <div className="edit-title">Edit Event</div>
             <br></br>
             <p>Client: {event.client.name}</p>
             <div className="input-container ic0">
                <input  id="name" className="input" type="text"  defaultValue={name}  onChange={(e) => setName(e.target.value)}/>
                <label className="edit-cut edit-cut-short">Name</label>
            </div>
            <div className="input-container ic0">
                <input id="desc" className="input" type="text" defaultValue={description} onChange={(e) => setDescription(e.target.value)}/>
                <label className="edit-cut edit-cut-short">Description</label>
            </div>
            <div className="input-container ic0">
                <input id="start-date" className="input" type="text" defaultValue={startDate} onChange={(e) => setStartDate(e.target.value)}/>
                <label className="edit-cut edit-cut-short">Start Date</label>
            </div>
            <div className="input-container ic0">
                 <input id="start-time" className="input" type="text" defaultValue={startTime}  onChange={(e) => setStartTime(e.target.value)}/>
                <label className="edit-cut edit-cut-short">Start Time</label>
            </div>
            <div className="input-container ic0">
                <input id="end-date" className="input" type="text" defaultValue={endDate} onChange={(e) => setEndDate(e.target.value)}/>
                <label className="edit-cut edit-cut-short">End Date</label>
            </div>
            <div className="input-container ic0">
                 <input id="end-time" className="input" type="text" defaultValue={endTime} onChange={(e) => setEndTime(e.target.value)}/>
                <label className="edit-cut edit-cut-short">End Time</label>
            </div>
            <div className="input-container ic0">
                <input id="location" className="input" type="text" defaultValue={location} onChange={(e) => setLocation(e.target.value)}/>
                <label className="edit-cut edit-cut-short">Location</label>
            </div>
            <div className="input-container ic0">
                <input id="budget" className="input" type="text" defaultValue={budget} onChange={(e) => setBudget(e.target.value)}/>
                <label className="edit-cut edit-cut-short">Budget</label>
            </div>
            {/* <div className="edit-title">Select Vendors</div>
            <br></br>
            <div>
               <SelectedVendors vendors={vendors} isChecked={isChecked} setIsChecked={setIsChecked} events={events} />
            </div> */}

            <button type="submit" className="submit-small">Edit</button>
            <Link to={"/home"}>
                <button className="submit-small">Cancel</button >
            </ Link>
         </form>
        </div>
        
    ) : null
};

export default EditEvent;