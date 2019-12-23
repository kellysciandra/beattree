import React, { Component } from 'react'
import Home from '../layout/Home'

export default class Beats extends Component {
    constructor() {
        super() 

        this.state = {
            play: false,
            pause: true,
            url: 'mp3/audio-1.wav'
        }
         audio = new Audio(this.state.url)
    }

    play(){
        this.setState({
          play: true,
          pause: false
        });
        console.log(this.audio);
        this.audio.play();
      }
    
      pause(){
      this.setState({ play: false, pause: true });
        this.audio.pause();
      }

    

    componentDidMount() {
     
        audio.addEventListener('ended', () => this.setState({ play: false }));
    }

    componentWillUnmount() {
        let audio = new Audio(this.state.url)
        audio.removeEventListener('ended', () => this.setState({ play: false }));  
    }

      togglePlay = () => {
        this.setState({ play: !this.state.play }, () => {
          this.state.play ? this.audio.play() : this.audio.pause();
        });
    }
    

    render() { 
        return (
            <div>
                <Home play={this.togglePlay}/>
            </div>
        )
    }
}
