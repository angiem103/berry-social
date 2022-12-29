import React from "react";
import VendorCard from "./VendorCard";
import { useNavigate } from "react-router-dom";
import "../Container.css";
import "../index.css"

function Vendors ( { vendors, onVendorDelete } ) {

  const navigate = useNavigate();

  const renderVendors = vendors.sort( (a,b) => a.id > b.id ? 1 : -1).map((vendor) => (
    <div >
      <VendorCard key={vendor.id} vendor={vendor} onVendorDelete={onVendorDelete}/>
    </div>
  ))

  function handleNewVendor(e) {
    e.preventDefault()
    navigate('/newvendor')
  }

    return (
        <section className="background">
        <h1 className="header">Vendors</h1>
        <div className="container">
          {renderVendors}
        </div>
        <button className="new-vendor-submit" onClick={handleNewVendor}>Add New Vendor</button>
      </section>
    )

}

export default Vendors;