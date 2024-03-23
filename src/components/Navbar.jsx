import React from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="navbar-container">
        <div className="container">
          <Link to="/" className="link-title">
            <div className="navbar-title">Resume Builder</div>
          </Link>

          <div className="navbar-home">Home</div>
          <div className="navbar-about">About</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
