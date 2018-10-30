import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = props => {
  return (
    <div className="Navbar">
      <ul className="Navbar__links">
        <li className="Navbar__links-link">
          <Link to="/">Public</Link>
        </li>
        <li className="Navbar__links-link">
          <Link to="/home">Home</Link>
        </li>
        <li className="Navbar__links-link">
          <Link to="/login">Login</Link>
        </li>
      </ul>

      <div className="Navbar__greeting">Hello, Jim!</div>
    </div>
  );
};

export default Navbar;
