import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'


const SignedOutLinks = () => {
    return (
        <div className="nav-bar">
              <Navbar expand="sm" variant="dark">
              <Navbar.Brand href="/">BeatTree</Navbar.Brand>
              <NavLink to="/artist/ArtistLogin" style={{ marginRight: 10 }}>Artist</NavLink> 
              <NavLink to="/producer/ProducerLogin" style={{ marginRight: 10 }}>Producer</NavLink>
              </Navbar>
        </div>
    )
}


export default SignedOutLinks 