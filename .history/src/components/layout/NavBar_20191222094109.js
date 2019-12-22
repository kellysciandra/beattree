import React from 'react'
import { NavLink } from 'react-router-dom'
import  Navbar  from 'react-bootstrap/Navbar'


const NavBar = () => {
    return (
        <div className='nav-link'>
        <Navbar expand="lg" variant="light">
          <Navbar.Brand href="#">BeatTree</Navbar.Brand>
            <Navlink to='/'>{Home}</Navlink>

      </Navbar>
   
      </div>
    )
}

export default NavBar





   