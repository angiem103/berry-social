import React, {useState} from 'react' ;

function SelectedVendors ( { vendor, vendorDet, setVendorDet} ) {

    const inputStyle = {
      color: "rgba(255, 255, 255, 0))",
      fontFamily: "sans-serif",
      textTransform: "uppercase",
      fontSize: "12px",
      marginTop: "10px",
      textDecoration: "none",
      letterSpacing: "0.1em",
      fontWeight: "lighter",
    }

    const [vendCost, setVendCost] = useState();
    const [vendId, setVendId] = useState();
    const [isClicked, setIsClicked] = useState(false)

    function handleChecked(e) {
        const { id, checked } = e.target;
        if(checked) {
          setVendId(id)
        } else {
          setVendId(undefined)
        }
      };
    
    function handleClick() {
      const obj = {
        vendor_id: vendId,
        total_cost: vendCost
      }

      setVendorDet([...vendorDet, obj])
      setIsClicked(true)
    }

    return (
      <div style={inputStyle}>
        <input
          key={vendor.id}
          type="checkbox"
          name={vendor.name}
          id={vendor.id}
          onChange={handleChecked}
        />
        {vendor.name}
        <br></br>
        <label>Cost:</label>
        <input onChange={e => setVendCost(e.target.value)}/>
        <button disabled={isClicked} onClick={handleClick}>Save Vendor</button>
      </div>
    );
        
}

export default SelectedVendors;