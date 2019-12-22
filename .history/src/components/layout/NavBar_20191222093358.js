import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'


const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#features">Features</NavLink>
          <NavLink href="#pricing">Pricing</NavLink>
        </Navbar>
    )
}

export default NavBar





            {/* <NavLink to="/">Home</NavLink> <span/>
            <NavLink to="/logout">logout</NavLink> <span/> */}