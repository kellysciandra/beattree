import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import Navbar from 'react-bootstrap/Navbar'
import  { logoutArtist } from '../../actions/artistActions'


class NavBar extends Component{
 
    handleLogoutClick = () => {
      this.props.logoutArtist(this.props.artist.id)
    }

    componentDidMount = () =>  {
    }

    // setUser = () => { console.log(this.props.artist)
    //     if (this.props.artist.id === true){
    //     return (
    //       <div className='current-user'>
    //       artist:{this.props.artist.email}
    //       </div>
    //     )
    //    }
    // }
    
  render() { console.log(this.props)
    // artist = this.state.artist.email;

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

const mapDispatchToProps = dispatch => {
  return {
    logoutArtist: (artist) => dispatch(logoutArtist(artist)) 
  }
}

export default connect(null, mapDispatchToProps)(NavBar)







     