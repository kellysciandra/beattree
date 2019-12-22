import React from 'react'
import { NavLink, Navbar.Brand } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'


const NavBar = () => {
    return (
        <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <Navbar.Brand href="#">Navbar</Navbar.Brand>
        </Container>
      </Navbar>
   
      
    )
}

export default NavBar





   