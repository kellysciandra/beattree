import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'


const NavBar = () => {
    return (
        <div className='nav-bar'>
        <Navbar expand="sm" variant="light">
          <Navbar.Brand href="#">BeatTree</Navbar.Brand>
          <div>
            <NavLink to='/'>Home</NavLink>
            </div>
            <NavLink to='/'>Artist</NavLink>
            <NavLink to='/'>Producer</NavLink>
      </Navbar>
      </div>
    )
}

export default NavBar





     