import React, { useState } from "react";
import "../assets/styles/Navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo">Logo</div>
          <div
            className="ham-icon"
            onClick={() => (showMenu ? setShowMenu(false) : setShowMenu(true))}
          >
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <ul className={`nav-list ${showMenu ? "showMenu" : ""}`}>
            <li>
              <p className="nav-link" onClick={() => setShowMenu(false)}>
                Home
              </p>
            </li>
            <li>
              <p className="nav-link" onClick={() => setShowMenu(false)}>
                About Us
              </p>
            </li>
            <li>
              <p className="nav-link" onClick={() => setShowMenu(false)}>
                Contact
              </p>
            </li>
          </ul>
        </div>
      </nav>
  );
};
export default Navbar;
