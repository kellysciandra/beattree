import React from 'react'
import { NavLink, NavBar } from 'react-router-dom'

const NavBar = () => {
    return (
        <Navbar>
        <div  className="nav-bar">
            <NavLink to="/">Home</NavLink> <span/>
            <NavLink to="/logout">logout</NavLink> <span/>
        </div>
        </Navbar>
    )
}

export default NavBar