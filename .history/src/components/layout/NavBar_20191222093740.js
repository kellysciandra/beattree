import React from 'react'
import { NavLink, NavbarBrand } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'


const NavBar = () => {
    return (
       <NavbarBrand href='#'>BeatTree<Navbar.Brand/>
           <div>
           <NavLink to="/">Home</NavLink> <span/>
            <NavLink to="/logout">logout</NavLink> <span/> 
           </div>
   
      
    )
}

export default NavBar





            {/* */}