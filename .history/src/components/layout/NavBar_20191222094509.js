import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'


const NavBar = () => {
    return (
        <div className='nav-link'>
        <Navbar expand="lg" variant="light">
          <Navbar.Brand href="#">BeatTree</Navbar.Brand>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/'>Artist</NavLink>
            <NavLink to='/'>Producer</NavLink><br/>
      </Navbar>
      </div>
    )
}

export default NavBar





            {/* */}