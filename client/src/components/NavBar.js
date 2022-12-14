import React from "react";
import "../NavBar.css";
import { useNavigate, Link } from 'react-router-dom';

function NavBar( {currentUser, setCurrentUser } ) {

    const navigate = useNavigate()

    function handleLogOut() {
        fetch('/logout',{method: "DELETE"}).then((r) => {
            if(r.ok){
                setCurrentUser(null)
                navigate('/')
            } 
        })

    };

return (
<main className="main">
  <aside className="sidebar">
    <p className="greeting">Hello</p>
    <p className="greeting" >{currentUser.first_name}</p>
    <nav className="nav">
        <Link to="/clients" className="nav-button" >Clients</Link>
        <Link to="/events" className="nav-button" >Events</Link>
        <Link to="/newevent" className="nav-button" >New Event</Link>
        <Link to="/vendors" className="nav-button" >Vendors</Link>
        <button className="nav-button" onClick={handleLogOut}>Logout</button>
    </nav>

  </aside>
</main>
)

}

export default NavBar;