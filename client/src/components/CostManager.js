import React from "react";
import { useParams} from "react-router-dom";
import CostCard from "./CostCard";
import "../Container.css";


function CostManager( {events} ) {

    const params = useParams();
    const event =  events.find((event) => String(event.id) === params.id) 

    const renderCosts = event.event_vendors.map((cost) => ( <CostCard key={cost.id} event={event} cost={cost} /> )) 

    return (
        <section className="twitter">
            <h1 className="header"> Budget = {event.budget}</h1>
            <h1 className="header"> Current Cost = {event.total}</h1>
        <div className="container">
            {renderCosts}
        </div>
        </section>
    ) 
} 

export default CostManager;