import React, { Component } from 'react'
import Home from '../layout/Home'

export default class Beats extends Component {
    constructor() {
        super() 

        this.state = {
            play: false,
            url: 'mp3/audio-1.wav'
        }
    }

    

    componentDidMount() {
        let audio = new Audio(this.state.url)
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
