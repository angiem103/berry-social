import React from 'react' ;

function SelectedVendors ( { vendors, setIsChecked, isChecked, events } ) {

 
    const handleClick = e => {
        const { id, checked } = e.target;
        setIsChecked([...isChecked, id]);
        if (!checked) {
          setIsChecked(isChecked.filter(item => item !== id));
        }
      };


    const renderVendors = vendors.map(({ id, name }) => {
        return (
          <>
            <input
              key={id}
              type="checkbox"
              name={name}
              id={id}
              onChange={handleClick}

            />
            {name}
            <br></br>
          </>
        );
      });
        
      return  renderVendors

}

export default SelectedVendors;