import React, { useContext, useEffect } from "react";
import VendorCard from "./VendorCard";
import { useNavigate } from "react-router-dom";
import { InfoContext } from "../App";
import "../Container.css";
import "../index.css"


function Vendors ( { onVendorDelete } ) {

  const navigate = useNavigate();

  const {vendors} = useContext(InfoContext);

  const renderVendors = vendors ? vendors.sort( (a,b) => a.id > b.id ? 1 : -1).map((vendor) => (
    <div  key={vendor.id} >
      <VendorCard vendor={vendor} onVendorDelete={onVendorDelete}/>
    </div>
  )) : null

  function handleNewVendor(e) {
    e.preventDefault()
    navigate('/newvendor')
  }

    return (
        <section className="background">
        <h1 className="header">Vendors</h1>
        <div className="container">
          {vendors ? renderVendors : undefined}
        </div>
        <button className="new-vendor-submit" onClick={handleNewVendor}>Add New Vendor</button>
      </section>
    )

}

export default Vendors;