import React, { Component } from 'react'
// import Beats from '../audio/Beats'
// import { NavLink } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Sound from 'react-sound';

export default class Home extends Component {
    constructor(props) {
        super(props) 

        this.state = {
        }
        this.controls = {
            play: this.props.playStatus === Sound.status.STOPPED,
            stop: this.props.playStatus !== Sound.status.STOPPED,
            pause: this.props.playStatus === Sound.status.PLAYING,
            resume: this.props.playStatus === Sound.status.PAUSED
          };
    }



    render() { 
        return (
            <div>
                <h2 className= "logo"> BeatTree</h2>
                
                    <Button onClick={controls.play && control('Play', this.props.onPlay)} variant="light" className='container-1'>▶
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
