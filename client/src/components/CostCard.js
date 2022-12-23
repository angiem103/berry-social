import React from "react";
import { useState } from "react"; 
import "../index.css"
import "../Container.css";


function CostCard( {cost, event}) {

    console.log(event)

    const [vendorcost, setVendorCost] = useState(cost?.total_cost ?? "")

    const vendor = event.vendors.find(vendor => vendor.id == cost.vendor_id)

    function handleSubmitChanges(e){
        e.preventDefautl()
    }

    return event ? (
    <div className='edit-background'>
    <form className="card" onSubmit={handleSubmitChanges}>
        <div className="edit-title">{vendor.name}</div>
        <div className="input-container ic0">
           <input  id="name" className="input" type="text"  defaultValue={vendorcost}  onChange={(e) => setVendorCost(e.target.value)}/>
           <label className="edit-cut edit-cut-short">Cost</label>
           <button type="submit" className="submit">Edit</button>
       </div>
        </form>
        </div>
    ): undefined
}

export default CostCard;