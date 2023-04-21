import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { deleteToken } from "../../helpers";

const Navbar = () => {

  const navItems = ["Lorem", "Mine", "ReSync", "Chain"];
  const navElemets = navItems.map((nav, index) => (
    <div key={index} className="nav-item" >
      <Link className="my-nav-link"  to={nav === 'Mine' ? "/pending" : ""}>
        {nav}
      </Link>
    </div>
  ));

  return (
    <div className="my-nav-container">
      <div className="logo-container">
        <Link to="/home" className="logo">
          <img src={logo} alt="logo" />
        </Link>
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
