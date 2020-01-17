import React, { Component } from 'react'
import { connect } from 'react-redux';
import Navbar from 'react-bootstrap/Navbar'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'



class NavBar extends Component{
    
  render() { 

   const links = this.props.loggedIn? <SignedInLinks history={this.props.history} /> : <SignedOutLinks />

      return (
        <div className='nav-bar'>
        <Navbar expand="sm" variant="dark">
            { links }
            <div className='current-user'>
              {this.props.artist.email}
            </div>
        </Navbar>
        
      </div>
      )
  }
}

const mapStateToProps = (state) => {
  return {
    artist: state.artist.artist,
    loggedIn: state.artist.loggedIn,
    authError: state.artist.authError
  }
}

export default connect(mapStateToProps)(NavBar)







     