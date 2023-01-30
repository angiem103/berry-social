import React, { useContext } from "react";
import ClientCard from "./ClientCard";
import { useNavigate } from "react-router-dom";
import { InfoContext } from "../App";
import "../Container.css";
import "../index.css";

function Clients ( { onClientDelete } ) {

  const navigate = useNavigate();
  const {clients} = useContext(InfoContext);  


  const renderClients = clients ? clients.map((client) => (
    <div key={client.id}>
      <ClientCard  client={client} onClientDelete={onClientDelete}/>
    </div>
  )) : null

  function handleNewClient(e) {
    e.preventDefault()
    navigate('/newclient')
  };

    return (
        <section className="background">
        <h1 className="header">Clients</h1>
        <div className="reg-container">
          {renderClients}
        </div>
        <button className="new-vendor-submit" onClick={handleNewClient}>Add New Client</button>
      </section>
    );

}

export default Clients;