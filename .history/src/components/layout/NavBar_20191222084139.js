import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <div  className="nav-bar">
            <NavLink to="/">Home</NavLink> <span/>
            <NavLink to="/logout">logout</NavLink> <span/>
            <NavLink to="/signup/producer" variant="flat" size="sm" block>
        Producer Signup
        </NavLink>
     
        </div>
    )
}

export default NavBar