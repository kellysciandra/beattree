import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <div  className="nav-bar">
            <NavLink to="/">Home</NavLink> <span/>
            <NavLink to="/logout">logout</NavLink> <span/>
     
        </div>
    )
}

export default NavBar