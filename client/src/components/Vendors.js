import React from "react";
import VendorCard from "./VendorCard";
import { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import "../Container.css";
import "../index.css"

function Vendors ( { vendors } ) {

  const navigate = useNavigate();

  const renderVendors = vendors.map((vendor) => (
    <div >
      <VendorCard key={vendor.id} vendor={vendor} />
    </div>
  ))

  function handleNewVendor(e) {
    e.preventDefault()
    navigate('/newvendor')
  }

    return (
        <section className="twitter">
        <h1 className="header">Vendors</h1>
        <div className="container">
          {renderVendors}
        </div>
        <button className="new-vendor-submit" onClick={handleNewVendor}>Add New Vendor</button>
      </section>
    )

}

export default Vendors;