import React from "react";
import { useParams } from "react-router-dom";
import CostCard from "./CostCard";
import "../Container.css";


function CostManager( {events} ) {

    const params = useParams()
    const event =  events.find((event) => String(event.id) === params.id) 
    const renderCosts = event.event_vendors.map((cost) => ( <CostCard key={cost.id}  cost={cost} event={event} /> )) 

    return (
        <section id="cost-background">
            <h1 className="header-budget"> Budget = {event?.budget}</h1>
            <h1 className="header-budget"> Current Cost = {event?.total}</h1>
            <div id="cost-container">
                {renderCosts}
             </div>
        </section>
    ) 
} 

export default CostManager;