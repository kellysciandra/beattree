import React, { Component } from 'react'
// import Beats from '../audio/Beats'
// import { NavLink } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Sound from 'react-sound';

export default class Home extends Component {
    constructor(props) {
        super(props) 

        this.state = {
            src: 'public/mp3/audio-1.wav'
        }
        this.controls = {
            play: this.props.playStatus === Sound.status.STOPPED,
            stop: this.props.playStatus !== Sound.status.STOPPED,
            pause: this.props.playStatus === Sound.status.PLAYING,
            resume: this.props.playStatus === Sound.status.PAUSED
          };
    }


    handlePlay = () => {
        this.controls.play && ('Play', this.props.onPlay)
    }

    render() { console.log(this.props.playStatus)
        return (
            <div>
                <h2 className= "logo"> BeatTree</h2>
                
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
