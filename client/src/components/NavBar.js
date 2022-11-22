import React from "react";
import { NavLink } from "react-router-dom";
import "../NavBar.css";

function NavBar() {

return (
<main className="main">
  <aside className="sidebar">
    <nav className="nav">
        <NavLink >Events</NavLink>
        <li>Vendors</li>
        <li>Clients</li>
    </nav>
  </aside>
</main>
)

}

export default NavBar;