import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

const NavBar = (props) => {
    
   const links = props.loggedIn? <SignedInLinks/> : <SignedOutLinks />
  
      return (
        <div className='nav-bar'>
        <Navbar expand="sm" variant="dark">
            { links }
            <div className='current-user'>
              {/* {this.props.artist.email} */}
            </div>
        </Navbar>
      </div>
      )
}

export default NavBar
