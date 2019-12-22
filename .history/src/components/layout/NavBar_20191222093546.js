import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'


const NavBar = () => {
    return (
       <Navbar text='center-align' className='nav-link'>
           <div>
           <NavLink to="/">Home</NavLink> <span/>
            <NavLink to="/logout">logout</NavLink> <span/> 
           </div>
       </Navbar>
      
    )
}

export default NavBar





            {/* */}