import React from 'react'

import "./style.scss"
import { Link } from 'react-router-dom'

const Navbar = ({destination = "/"}) => {
  return (
    <nav className='navbar'>
      <Link to={destination} className='navbar'>
        <h3>MINDCHECK</h3>
      </Link>
    </nav>
  )
}

export default Navbar