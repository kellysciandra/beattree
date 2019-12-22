import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'


const NavBar = () => {
    return (
       <Navbar.Brand expand='lg'>
           <div>
           <NavLink to="/">Home</NavLink> <span/>
            <NavLink to="/logout">logout</NavLink> <span/> 
           </div>
       </Navbar>
      
    )
}

export default NavBar





            {/* */}