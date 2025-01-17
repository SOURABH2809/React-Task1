import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="nav-container">
      <nav className="navbar">
        <div className="nav-header">TASK</div>

        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-list ${menuOpen ? "open" : ""}`}>

          <li> <Link to="/toggle">Toggle</Link></li>
          <li><Link to="/form">Form</Link></li>
          <li><Link to="/todo">Todo</Link> </li>
          
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
