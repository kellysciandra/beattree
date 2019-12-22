import React from 'react'
import { NavLink} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'

const NavBar = () => {
    return (
        <Navbar className="nav-bar" variant="light" expand="lg">
        <Container>
            <NavLink to="/">Home</NavLink> <span/>
            <NavLink to="/logout">logout</NavLink> <span/>
        </Container>
        </Navbar>
    )
}

export default NavBar