import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div id="navbar" className="navbar">
        <h1 className="logo">
          <i className="fas fa-viruses"></i>
        </h1>
        <nav>
          <ul>
            {/* <li>
              <NavLink to="/">Home</NavLink>
            </li> */}
            <li>
              <NavLink to="/" activeClassName="selected">
                United States
              </NavLink>
            </li>
            <li>
              <NavLink to="/global" activeClassName="selected">
                Global
              </NavLink>
            </li>
            {/* <li>
              <NavLink to="/usmap">U.S. Map</NavLink>
            </li> */}
            <li>
              <NavLink to="/about" activeClassName="selected">
                About
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
