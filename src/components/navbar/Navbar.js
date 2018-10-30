import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = ({ isLoggedIn, logout, name }) => {
  return (
    <div className="Navbar">
      <ul className="Navbar__links">
        <li className="Navbar__links-link">
          <Link to="/">Public</Link>
        </li>
        {isLoggedIn && (
          <li className="Navbar__links-link">
            <Link to="/home">Home</Link>
          </li>
        )}
        {!isLoggedIn && (
          <li className="Navbar__links-link">
            <Link to="/login">Login</Link>
          </li>
        )}
        {isLoggedIn && (
          <li className="Navbar__links-link">
            <a href="true" onClick={logout}>
              Logout
            </a>
          </li>
        )}
      </ul>

      {isLoggedIn &&
        name && <div className="Navbar__greeting">Hello, {name}!</div>}
    </div>
  );
};

export default Navbar;
