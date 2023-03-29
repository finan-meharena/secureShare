import React from 'react'
import "./Navbar.css"
import logo from "../../assets/logo.png"

const Navbar = () => {

  const navItems = ["Request Mine", "Mine", "ReSync", "History" ]

  const  navElemets = navItems.map((nav, index) => (
    <div className='nav-item' key={index}>
      <a key={index} href="#" > {nav} </a>
    </div>
  ))
  return (
    <div className='nav-container'>
        <div className="logo-container">
          <a href="" className="logo">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="nav-items">
          {navElemets}
        </div>
    </div>
  )
}

export default Navbar