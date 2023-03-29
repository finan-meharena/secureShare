import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { deleteToken } from "../../helpers";

const Navbar = () => {

  // const navItems = ["Request Mine", "Mine", "ReSync", "History", "Logout"];
  // const navElemets = navItems.map((nav, index) => (
  //   <div className="nav-item" >
  //     <a  href="#">
  //       {" "}
  //       {nav}{" "}
  //     </a>
  //   </div>
  // ));

  return (
    <div className="nav-container">
      <div className="logo-container">
        <a href="" className="logo">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div className="nav-items">
        {/* {navElemets} */}

        <div className="nav-item" >
          <a  href="#">
            Request Mine
          </a>
        </div>
        <div className="nav-item" >
          <a  href="#">
            Mine
          </a>
        </div>
        <div className="nav-item" >
          <a  href="#">
            ReSync
          </a>
        </div>
        <div className="nav-item" >
          <a  href="#">
            History
          </a>
        </div>
        <div className="nav-item logout"  onClick={deleteToken}>
          <Link to="/" >
            Logout
          </Link>
        </div>


      </div>
    </div>
  );
};

export default Navbar;
