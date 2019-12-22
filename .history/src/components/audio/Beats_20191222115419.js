import React, { Component } from 'react'

export default class Beats extends Component {

    state = {
        play: false
    }

    url = 'mp3/audio-1.wav'
    audio = new Audio(this.props.url)

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
    

    render() {
        return (
            <div>
                <Home play={this.togglePlay}/>
            </div>
        )
    }
}
