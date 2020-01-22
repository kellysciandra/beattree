import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'


const SignedOutLinks = () => {
    return (
        <div className="nav-bar">
              <Navbar expand="sm" variant="dark">
              <Navbar.Brand href="/">BeatTree</Navbar.Brand>
              <NavLink to="/artist/ArtistLogin" style={{ marginRight: 10 }}>LogIn</NavLink> 
              <NavLink to="/artist/ArtistSignup" style={{ marginRight: 10 }}>SignUp</NavLink>
              </Navbar>
        </div>
    )
}

export default SignedOutLinks 