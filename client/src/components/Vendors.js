import React from "react";
import VendorCard from "./VendorCard";
import { useNavigate } from "react-router-dom";
import "../Container.css";
import "../index.css"

function Vendors ( { vendors, onVendorDelete } ) {

  const navigate = useNavigate();

  const renderVendors = vendors.map((vendor) => (
    <div >
      <VendorCard key={vendor.id} vendor={vendor} onVendorDelete={onVendorDelete}/>
    </div>
  ))

  function handleNewVendor(e) {
    e.preventDefault()
    navigate('/newvendor')
  }

    return (
        <section className="twitter">
        <h1 className="header">Vendors</h1>
        <div className="vendor-container">
          {renderVendors}
        </div>
        <button className="new-vendor-submit" onClick={handleNewVendor}>Add New Vendor</button>
      </section>
    )

}

export default Vendors;