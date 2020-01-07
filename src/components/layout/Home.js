import React, { Component } from 'react'

// import Beats from '../audio/Beats'
// import { NavLink } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Sound from 'react-sound';
import NavBar from './NavBar'


export default class Home extends Component {
    constructor(props) {
        super(props) 

        this.state = {
            file: null
        }
        
        this.controls = {
            play: this.props.playStatus === Sound.status.STOPPED,
            stop: this.props.playStatus !== Sound.status.STOPPED,
            pause: this.props.playStatus === Sound.status.PLAYING,
            resume: this.props.playStatus === Sound.status.PAUSED
          };

    }

    render() { 
        return  (
            <div>
            <NavBar loggedInStatus={this.props.loggedInStatus} handleLogout={this.props.handleLogout}/>
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
