import React, { Component } from 'react'
import Home from '../layout/Home'
import Sound from 'react-sound';

export default class Beats extends Component {
    constructor() {
        super() 

        this.state = {
            play: false,
            pause: true,
            url: 'public/mp3/audio-1.wav',
            controlled: true,
            position: 0,
            playStatus: Sound.status.PLAYING
        }

    }
    

      renderCurrentSong() {
        return (
          <p>
            Current song {this.state.currentSong.title}. Song is {this.getStatusText()}
          </p>
        );
      }
    

    render() {
        return ( 
            <div>
          <Home
          playStatus={this.state.playStatus}
          onPlay={() => this.setState({ playStatus: Sound.status.PLAYING })}
          onPause={() => this.setState({ playStatus: Sound.status.PAUSED })}
          onResume={() => this.setState({ playStatus: Sound.status.PLAYING })}
          onStop={() => this.setState({ playStatus: Sound.status.STOPPED, position: 0 })}
          onSeek={position => this.setState({ position })}
          duration={this.state.currentSong ? this.state.currentSong.duration : 0}
          position={this.state.position}

        />
   
            <Sound
              url={this.state.currentSong.url}
              playStatus={this.state.playStatus}
              position={this.state.position}
              onLoading={({ bytesLoaded, bytesTotal }) => console.log(`${bytesLoaded / bytesTotal * 100}% loaded`)}
              onLoad={() => console.log('Loaded')}
              onPlaying={({ position }) => this.setState({ position })}
              onPause={() => console.log('Paused')}
              onResume={() => console.log('Resumed')}
              onStop={() => console.log('Stopped')}
              onFinishedPlaying={() => this.setState({ playStatus: Sound.status.STOPPED })}
            /> 
   
            </div>
        )
    }
}
