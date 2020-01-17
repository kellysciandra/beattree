import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import  { logoutArtist } from '../../actions/artistActions'
import { connect } from 'react-redux';



class SignedInLinks extends Component { 

  handleLogout = (event) => {
    event.preventDefault()
    this.props.logoutArtist(this.props.artist.id)
  }

  render() { 
    return (
        <div className="nav-bar">
            <Navbar expand="sm" variant="dark">
            <Navbar.Brand href="/">BeatTree</Navbar.Brand>
            <NavLink to="/artist" style={{ marginRight: 10 }}>Artist</NavLink> 
            <Navbar.Brand onClick={this.handleLogout} >logout</Navbar.Brand>
            </Navbar>
        </div>
    )
  }
}


const mapStateToProps = (state)  => {
  return {
    artist: state.artist.artist,
    loggedIn: state.artist.loggedIn
  }
}


const mapDispatchToProps = dispatch => {
    return {
      logoutArtist: (artist) => dispatch(logoutArtist(artist)) 
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(SignedInLinks)