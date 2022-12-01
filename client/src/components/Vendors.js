import React from "react";
import VendorCard from "./VendorCard";
import { useState, useEffect } from "react";
import "../Container.css";

function Vendors ( ) {

  const [vendors, setVendors] = useState ([])

  useEffect(() => {
    fetch("/vendors")
    .then(r => r.json())
    .then(setVendors)
  }, [])

  console.log(vendors)
  const renderVendors = vendors.map((vendor) => (
    <div key={vendor.id}>
      <VendorCard vendor = {vendor} />
    </div>
  ));

    return (
        <section className="twitter">
        <h1 className="header">Vendors</h1>
        <div className="container">
          {renderVendors}
        </div>
      </section>
    )

}

export default Vendors;