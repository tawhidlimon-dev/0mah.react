import React from 'react'
import './navbar.css'
import Logo from '../../assets/images/logo.png'
const Navbar = () => {
  return (
    <div id="nav_section">
    <div className="container">
      <div className="nav_wrapper">
          <div className="logo">
            <a href="#">
              <picture>
                <img src={Logo} alt="Not Found" />
              </picture>
            </a>
          </div>
          <div className="menu">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Propertis</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
      </div>
    </div>
  </div>
  )
}

export default Navbar
