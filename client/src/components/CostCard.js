import React from "react";
import { useState } from "react"; 
import { useNavigate } from "react-router-dom";
import "../index.css"
import "../Container.css";


function CostCard( {cost, event}) {

    console.log(event)

    const navigate = useNavigate();

    const [vendorCost, setVendorCost] = useState(cost?.total_cost ?? "")

    const vendor = event.vendors.find(vendor => vendor.id == cost.vendor_id) 

    function handleSubmitChanges(e){
        e.preventDefautl()

        const costObj = {
            event_id: event.id,
            vendor_id: vendor.id,
            total_cost: vendorCost
        }

        console.log(costObj)

        fetch(`/event_vendors/${event.id}`, {
            method: "PATCH", 
            header: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(costObj)
        })
        .then( r => r.json())
        .then(navigate('/home'))
    }

    return event ? (
    <div className='edit-background'>
    <form className="card" onSubmit={handleSubmitChanges}>
        <div className="edit-title">{vendor.name}</div>
        <div className="input-container ic0">
           <input  id="name" className="input" type="text"  defaultValue={vendorCost}  onChange={(e) => setVendorCost(e.target.value)}/>
           <label className="edit-cut edit-cut-short">Cost</label>
           <button type="submit" className="submit">Edit</button>
       </div>
        </form>
        </div>
    ): undefined
}

export default CostCard;