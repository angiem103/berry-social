import React from "react";
import { NavLink } from "react-router-dom";
import "../NavBar.css";
import { useNavigate } from 'react-router-dom';

function NavBar( {currentUser, setCurrentUser} ) {

    const navigate = useNavigate()

    function handleLogOut() {
        navigate('/')
        fetch('/logout',{method: "DELETE"}).then((r) => {
            if(r.ok){
                setCurrentUser(null)
            }
        })
    };

return (
<main className="main">
  <aside className="sidebar">
    <p>Hello {currentUser.first_name}</p>
    <nav className="nav">
        <NavLink>Events</NavLink>
        <NavLink>Vendors</NavLink>
        <NavLink>Clients</NavLink>
        <button onClick={handleLogOut}>Logout</button>
    </nav>

  </aside>
</main>
)

}

export default NavBar;