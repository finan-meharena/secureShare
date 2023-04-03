import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { deleteToken } from "../../helpers";

const Navbar = () => {

  const navItems = ["Request Mine", "Mine", "ReSync", "History"];
  const navElemets = navItems.map((nav, index) => (
    <div key={index} className="nav-item" >
      <a className="my-nav-link"  href="#">
        {nav}
      </a>
    </div>
  ));

  return (
    <div className="my-nav-container">
      <div className="logo-container">
        <a href="" className="logo">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div className="nav-items">
        {navElemets}
        <div className="nav-item logout"  onClick={deleteToken}>
          <Link className="logout" to="/" >
            Logout
          </Link>
        </div>


      </div>
    </div>
  );
};

export default Navbar;
