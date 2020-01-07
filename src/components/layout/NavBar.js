import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import axios from 'axios'


class NavBar extends Component{
    constructor(props) {
      super(props)

      this.handleLogoutClick = this.handleLogoutClick.bind(this)
    }

    handleLogoutClick = () => {
      axios
        .delete("http://localhost:3001/logout", {withCredentials: true})
          .then(response => {
            this.props.handleLogout()
          })
          .catch(error => {
            console.log(error)
          })
    }
    
 
  render() { 
    return (
        <div className='nav-bar'>
        <Navbar expand="sm" variant="dark">
          <Navbar.Brand href="/">BeatTree</Navbar.Brand>
            <NavLink to="/artist/ArtistLogin" style={{ marginRight: 10 }}>Artist</NavLink> 
            <NavLink to="/producer/ProducerSignup" style={{ marginRight: 10 }}>Producer</NavLink>
            <Navbar.Brand onClick={() => this.handleLogoutClick()} >logout</Navbar.Brand>
      </Navbar>
      </div>
    )
  }
}

export default NavBar







     