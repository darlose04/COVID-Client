import React from "react";
import { Link } from "react-router-dom";

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
              <Link to="/">Home</Link>
            </li> */}
            <li>
              <Link to="/">United States</Link>
            </li>
            <li>
              <Link to="/global">Global</Link>
            </li>
            {/* <li>
              <Link to="/usmap">U.S. Map</Link>
            </li> */}
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
