import React from "react";
import "../NavBar.css";
import { useNavigate } from 'react-router-dom';

function NavBar( {currentUser, setCurrentUser, setActive } ) {

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
        <button className="nav-button" onClick={() => setActive("Events")}>Events</button>
        <button className="nav-button" onClick={() => setActive("Vendors")}>Vendors</button>
        <button className="nav-button">Clients</button>
        <button onClick={handleLogOut}>Logout</button>
    </nav>

  </aside>
</main>
)

}

export default NavBar;