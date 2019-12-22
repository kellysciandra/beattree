import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'


const NavBar = () => {
    return (
        <div className='nav-bar'>
        <Navbar expand="md" variant="light">
          <Navbar.Brand href="#">BeatTree</Navbar.Brand>

            <NavLink to='/' style={{ marginRight: 10 }}>Home </NavLink>
            <NavLink to="/signup/" style={{ marginRight: 10 }}>Artist</NavLink>
            <NavLink to="/signup/producer" style={{ marginRight: 10 }}>Producer</NavLink>
      </Navbar>
      </div>
    )
}

export default NavBar





     