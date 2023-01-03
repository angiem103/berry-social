import React from "react";
import ClientCard from "./ClientCard";
import { useNavigate } from "react-router-dom";
import "../Container.css";
import "../index.css";

function Clients ( { clients, onClientDelete } ) {

  const navigate = useNavigate();

  const renderClients = clients.map((client) => (
    <div key={client.id}>
      <ClientCard  client={client} onClientDelete={onClientDelete}/>
    </div>
  ));

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