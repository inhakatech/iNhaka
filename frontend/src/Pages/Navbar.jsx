import "./Navbar.css";
import logo from "../assets/iNhaka-logo.png";

import { useState } from "react";


function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* LEFT */}
      <div className="nav-left">
        <img src={logo} alt="iNhaka Logo" className="logo"/>
      </div>

      {/* CENTER */}
      <ul className={`nav-center ${menuOpen ? "active" : ""}`}>

        <li><a href="#">Home</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Programs</a></li>
        <li><a href="#">Events</a></li>
      </ul>

      {/* RIGHT */}
      <div className="nav-right">
        <button className="donate-btn">Join Us</button>
      </div>

      {/* HAMBURGER */}
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
    </nav>
  );
}

export default Navbar;
