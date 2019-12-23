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
    }

    playAudio() {
        const audioEl = 'public/mp3/audio-1.wav'
        console.log(audioEl)
        audioEl.play()
    }
 



    render() { 
        return (
            <div>
                <h2 className= "logo"> BeatTree</h2>
                
                    <Button onClick={this.playAudio} variant="light" className='container-1'>▶
                  </Button>
                  <audio className='audio-element'>
                      <source src='public/mp3/audio-1.wav' />
                  </audio>
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
