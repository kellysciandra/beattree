import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'


const NavBar = () => {
    return (
        <div className='nav-link'>
        <Navbar expand="sm" variant="light">
          <Navbar.Brand href="#">BeatTree</Navbar.Brand>
          <span>
            <NavLink to='/'>Home</NavLink>
            </span>>
            <NavLink to='/'>Artist</NavLink><span/>
            <NavLink to='/'>Producer</NavLink>
      </Navbar>
      </div>
    )
}

export default NavBar





     