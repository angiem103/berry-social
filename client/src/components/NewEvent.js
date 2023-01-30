import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { InfoContext } from '../App';
import SelectedVendors from './SelectedVendors'
import "../index.css"


function NewEvent ( ) {

        const navigate = useNavigate();

        const {clients, events, setEvents, currentUser, vendors} = useContext(InfoContext);

        const [name, setName] = useState('');
        const [description, setDescription] = useState('');
        const [location, setLocation] = useState('');
        const [budget, setBudget] = useState('');
        const [startDate, setStartDate] = useState('');
        const [startTime, setStartTime] = useState('');
        const [endDate, setEndDate] = useState('');
        const [endTime, setEndTime] = useState('');
        const [selectedClient, setSelectedClient] = useState('');
        const [vendorDet, setVendorDet] = useState([]);
        const [eventErrors, setEventErrors] = useState([]);

    
        function handleClientChange(e) {
            setSelectedClient(e.target.value)
       }

        function handleNewEvent(e) {
            e.preventDefault()


            const newEvent = {
                user_id: currentUser.id,
                name: name,
                description: description,
                start_date: startDate,
                start_time: startTime,
                end_date: endDate,
                end_time: endTime,
                location: location,
                budget: budget,
                client_id: selectedClient,
                vendor_details: vendorDet
            };
    
    
            console.log(newEvent)

            fetch('/events', {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(newEvent)
            })
            .then(r => {
                if(r.ok){
                    r.json()
                    .then(newE => {
                        setEvents([...events,newE])
                        navigate('/events')
                    })
                    // r.json(setEvents([...events,newEvent])).then(navigate('/events'))
                } else {
                    r.json().then(err => setEventErrors(err.errors))
                }
            })

            setVendorDet([])
            
        }
    
    
    
      return (
    
            <div className='edit-background'>
             <form className="new-event-form" onSubmit={handleNewEvent}>
                 <div className="edit-title">New Event</div>
                 <div className="input-container ic0">
                    <input  id="name" className="input" type="text" onChange={(e) => setName(e.target.value)}/>
                    <label className="edit-cut edit-cut-short">Name</label>
                </div>
                <div className="input-container ic0">
                    <input id="desc" className="input" type="text"  onChange={(e) => setDescription(e.target.value)}/>
                    <label className="edit-cut edit-cut-short">Description</label>
                </div>
                <div className="input-container ic0">
                    <input id="start-date" className="input" type="text"  onChange={(e) => setStartDate(e.target.value)}/>
                    <label className="edit-cut edit-cut-short">Start Date</label>
                </div>
                <div className="input-container ic0">
                     <input id="start-time" className="input" type="text"  onChange={(e) => setStartTime(e.target.value)}/>
                    <label className="edit-cut edit-cut-short">Start Time</label>
                </div>
                <div className="input-container ic0">
                    <input id="end-date" className="input" type="text" onChange={(e) => setEndDate(e.target.value)}/>
                    <label className="edit-cut edit-cut-short">End Date</label>
                </div>
                <div className="input-container ic0">
                     <input id="end-time" className="input" type="text" onChange={(e) => setEndTime(e.target.value)}/>
                    <label className="edit-cut edit-cut-short">End Time</label>
                </div>
                <div className="input-container ic0">
                    <input id="location" className="input" type="text"  onChange={(e) => setLocation(e.target.value)}/>
                    <label className="edit-cut edit-cut-short">Location</label>
                </div>
                <div className="input-container ic0">
                    <input id="budget" className="input" type="text"  onChange={(e) => setBudget(e.target.value)}/>
                    <label className="edit-cut edit-cut-short">Budget</label>
                </div>
                <br></br>
                <select value={selectedClient} onChange={handleClientChange}>
                    <option disabled={true} value="">
                            Choose Client
                    </option>
                    {clients.map((client) => <option key={client.id} value={client.id}>{client.name}</option>)}

                </select>
                <div className="edit-title">Manage Vendors</div>
                <br></br>
                    {vendors ? vendors.map(vendor => <SelectedVendors vendor={vendor} setVendorDet={setVendorDet} vendorDet={vendorDet}/>) : null}
                <br></br>
                <button type="submit" className="submit-small">Create Event</button>
                <Link to={"/events"}>
                    <button className='submit-small'>Cancel</button >
                </ Link>
                <ul>
                    {eventErrors ? eventErrors.map((error) => <li>{error}</li>): null}
                </ul>
             </form>
            </div>
            
        ) 


}

export default NewEvent;