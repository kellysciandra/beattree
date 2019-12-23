import React, { Component } from 'react'
import Home from '../layout/Home'

export default class Beats extends Component {
    constructor(props) {
        super(props) 

        this.state = {
            play: false,
            url: 'mp3/audio-1.wav'
        }
    }

    audio = new Audio(this.state.url)

    componentDidMount() {
        this.audio.addEventListener('ended', () => this.setState({ play: false }));
    }

    componentWillUnmount() {
        this.audio.removeEventListener('ended', () => this.setState({ play: false }));  
    }

      togglePlay = () => {
        this.setState({ play: !this.state.play }, () => {
          this.state.play ? this.audio.play() : this.audio.pause();
        });
    }
    

    render() { console.log(this.state.url)
        return (
            <div>
                <Home play={this.togglePlay}/>
            </div>
        )
    }
}
