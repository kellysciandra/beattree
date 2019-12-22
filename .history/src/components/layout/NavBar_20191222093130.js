import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'

const NavBar = () => {
    return (
        <Navbar className="nav-bar" variant="light" expand="lg">
        <Container>

        </Container>
        </Navbar>
    )
}

export default NavBar

<Navbar bg="dark" variant="dark">
<Navbar.Brand href="#home">Navbar</Navbar.Brand>
<Nav className="mr-auto">
  <Nav.Link href="#home">Home</Nav.Link>
  <Nav.Link href="#features">Features</Nav.Link>
  <Nav.Link href="#pricing">Pricing</Nav.Link>
</Nav>
<Form inline>
  <FormControl type="text" placeholder="Search" className="mr-sm-2" />
  <Button variant="outline-info">Search</Button>
</Form>
</Navbar>



            {/* <NavLink to="/">Home</NavLink> <span/>
            <NavLink to="/logout">logout</NavLink> <span/> */}