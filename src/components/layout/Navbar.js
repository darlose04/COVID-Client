import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header>
      <div id="navbar" class="navbar">
        <h1 className="logo">
          <i class="fas fa-viruses"></i>
        </h1>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Cases</a>
            </li>
            <li>
              <a href="#">Deaths</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
