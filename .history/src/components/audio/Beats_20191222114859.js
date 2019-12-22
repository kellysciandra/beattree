import React, { Component } from 'react'

export default class Beats extends Component {

    state = {
        play: false
    }
    url = 'mp3/audio-1.wav'
    audio = new Audio(this.props.url)

    render() {
        return (
            <div>
                
            </div>
        )
    }
}
