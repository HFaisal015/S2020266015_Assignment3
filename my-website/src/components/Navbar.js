import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
    <nav className="navbar">
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/Personalities">Favorite Personalities</Link></li>
      <li><Link to="/cities">Favorite Cities</Link></li>
      <li><Link to="/tourist-spots">Favorite Tourist Spots</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </nav>

    </div>
  )
}

export default Navbar

