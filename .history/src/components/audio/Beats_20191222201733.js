import React, { Component } from 'react'
import Home from '../layout/Home'

export default class Beats extends Component {
    constructor() {
        super() 

        this.state = {
            play: false,
            pause: true,
            src: 'public/mp3/audio-1.wav'
        }
         this.audio = new Audio('public/mp3/audio-1.wav')
    }

    play = () => {
        this.setState({
          play: true,
          pause: false
        });
        this.audio.play();
      }
    
      pause = () => {
      this.setState({ play: false, pause: true });
        this.audio.pause();
      }

    

    componentDidMount = () => {
        this.audio.addEventListener('ended', () => this.setState({ play: false }));
    }

    componentWillUnmount = () => {
        this.audio.removeEventListener('ended', () => this.setState({ play: false }));  
    }

      togglePlay = () => {
        this.setState({ play: !this.state.play }, () => {
          this.state.play ? this.audio.play() : this.audio.pause();
        });
    }
    

    render() { console.log(this.play())
        return ( 
            <div>
                <Home play={this.play} link={console.log(this.state.src)}/>
            </div>
        )
    }
}
