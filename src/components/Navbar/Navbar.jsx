import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import "./Navbar.css"

export const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!isMenuOpen);
    };
    return (
        <nav className='navbar'>
    
          <div className="logo"><b>LOGO</b></div>
          <div className="navbar-center">
            < ul id="nav-menu" className={isMenuOpen ? "#nav-menu active" : "#nav-menu"}>
              <li className="active">Dashboard</li>
    
              <li className="parent">Home</li>
              <li>About Us</li>
              <li>Our Blog</li>
              <li>Support</li>
              <li>Affiliate</li>
              <li>Programs</li>
            </ul>
          </div>
    
          <div id="mobile" onClick={toggleMenu}>
            {
              isMenuOpen ? <FaTimes /> : <FaBars />
            }
          </div>
    
          <div className="navbar-right">
            <div className="toggle-menu" onClick={toggleMenu}>
              <i className="fas fa-bars"></i>
            </div>
            <div className="nav-login">
              Login
            </div>
            <div className="nav-signup">
              Signup
            </div>
          </div>
        </nav>
      );
}
