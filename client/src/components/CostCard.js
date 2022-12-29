import React from "react";
import { useState } from "react"; 
import { useNavigate } from "react-router-dom";
import "../index.css";
import "../Container.css";


function CostCard( {cost, event}) {


    const navigate = useNavigate();

    const [vendorCost, setVendorCost] = useState(cost?.total_cost ?? "");

    const vendor = event.vendors.find(vendor => vendor.id === cost.vendor_id);

    function handleSubmitChanges(e){
        e.preventDefault()

        const costObj = {
            id: cost.id,
            event_id: event.id,
            vendor_id: vendor.id,
            total_cost: vendorCost
        }


         fetch(`/event_vendors/${cost.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type' : 'application/json'
             },
            body: JSON.stringify(costObj)
            })
            .then(r => r.json())
             .then(obj => {
                console.log(obj)
                navigate("/home")
            })

    };


    return event ? (
    <form id="cost-card" onSubmit={handleSubmitChanges}>
        <div className="edit-title">{vendor.name}</div>
        <div className="input-container ic0">
           <input  id="name" className="input" type="text"  defaultValue={vendorCost}  onChange={(e) => setVendorCost(e.target.value)}/>
           <label className="edit-cut edit-cut-short">Cost</label>
           <button type="submit" className="submit">Edit</button>
       </div>
        </form>

    ): undefined
};

export default CostCard;