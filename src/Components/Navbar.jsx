import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { GrSearch } from "react-icons/gr";
import AudiModelsPage from '../Pages/AudiModelsPage';

function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Function to toggle dropdown
  const toggleDropdown = (name) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  // Dropdown content for each navigation item
  const dropdownContent = {
    
    "used cars": (
      <div className="dropdown-content-inner">
        <div className="dropdown-section">
          <ul>
            <Link to="https://www.audiapprovedplus.in/" style={{textDecoration:"none"}}><li>Audi Approved Plus</li></Link>
          </ul>
        </div>
        <div className="dropdown-section">
          <ul>
            <Link to="/map" ><li>Dealer Locator</li></Link>
          </ul>
        </div>
      </div>
    ),
    "custom area": (
      <div className="dropdown-content-inner">
        <div className="dropdown-section">
          <ul>
            <li>Audi Owners</li>
            <li>Audi Service</li>
            <li>myAudi Connect</li>
            <li>Audi Club Rewards</li>
          </ul>
        </div>
        <div className="dropdown-section">
          <ul>
            <li>Sustainability</li>
            <li>Audi Assist</li>
            <li>Audi Accident Management</li>
          </ul>
        </div>
      </div>
    ),
    innovation: (
      <div className="dropdown-content-inner">
        <div className="dropdown-section">
          <ul>
            <li>#FutureIsAnAttitude</li>
          </ul>
        </div>
        <div className="dropdown-section">
          <ul>
            <li>Audi Urbansphere</li>
          </ul>
        </div>
      </div>
    ),
  };

  return (
    <>
      <nav className="nav">
        <div className="nav-left">
          {/* logo  */}
          <NavLink to="/"><img
            src="Audi-Logo.wine-removebg-preview.png"
            alt=""
            className="audi-logo"
          /></NavLink>
          {/* links  */}
          <NavLink
            to="/models"
           
          >
            Models
          </NavLink>
          <NavLink
            to="/used cars"
            className={`nav-link ${
              activeDropdown === "used cars" ? "active-nav-link" : ""
            }`}
            onClick={(e) => {
              e.preventDefault();
              toggleDropdown("used cars");
            }}
          >
            Used cars
          </NavLink>
          <NavLink
            to="/custom area"
            className={`nav-link ${
              activeDropdown === "custom area" ? "active-nav-link" : ""
            }`}
            onClick={(e) => {
              e.preventDefault();
              toggleDropdown("custom area");
            }}
          >
            Coustom area
          </NavLink>
          <NavLink
            to="/innovation"
            className={`nav-link ${
              activeDropdown === "innovation" ? "active-nav-link" : ""
            }`}
            onClick={(e) => {
              e.preventDefault();
              toggleDropdown("innovation");
            }}
          >
            Innovation
          </NavLink>
          
        </div>
        {/* search  */}
        <div className="nav-right">
          <GrSearch />
        </div>
      </nav>

      {/* Full-width dropdown */}
      {activeDropdown && (
        <>
          <div
            className="dropdown-overlay"
            onClick={() => setActiveDropdown(null)}
          ></div>
          <div className="dropdown-container" ref={dropdownRef}>
            <div className="dropdown-wrapper">
              {dropdownContent[activeDropdown]}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Navbar;
