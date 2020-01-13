import React, { Component } from 'react'
import { connect } from 'react-redux';
// import Beats from '../audio/Beats'
// import { NavLink } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

import NavBar from './NavBar'


class Home extends Component {


    render() { console.log(this.props)
        return  (
            <div>
            <NavBar loggedIn={this.props.loggedIn} artist={this.props.artist}/>
                <h2 className= "logo"> BeatTree </h2>
                    <Button onClick={this.handlePlay} variant="light" className='container-1'>▶
                    </Button>
                    <Button variant="light"  className='container-1'>▶
                    </Button>
                    <Button variant="light"  className='container-1'>▶
                    </Button>
                    <Button variant="light"  className='container-2'>▶
                    </Button>
                    <Button variant="light"  className='container-2'>▶
                    </Button>
                    <Button variant="light"  className='container-2'>▶
                    </Button>

             </div>
        )
    }
}

const mapStateToProps = (state)  => {
    return {
      artist: state.artist,
      loggedIn: state.loggedIn
    }
  }

export default connect(mapStateToProps)(Home)