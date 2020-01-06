import React, { Component } from 'react'

// import Beats from '../audio/Beats'
// import { NavLink } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Sound from 'react-sound';
import NavBar from './NavBar'
import ArtistSignup from '../artist/ArtistSignup'

import ArtistLogin from '../artist/ArtistLogin'


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

          this.handleAuth = this.handleAuth.bind(this)
    }

    handleAuth = (data) =>{ 
        this.props.handleLogin(data)
        this.props.history.push("/artist")
    }


    render() { console.log(this.props)
        return (
            <div>
            <NavBar />
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

                    <ArtistSignup handleAuth={this.handleAuth}/>
                    <ArtistLogin handleAuth={this.handleAuth}/>
             </div>
        )
    }
}
