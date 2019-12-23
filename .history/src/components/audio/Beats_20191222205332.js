import React, { Component } from 'react'
import Home from '../layout/Home'
import Sound from 'react-sound';

export default class Beats extends Component {
    constructor() {
        super() 

        this.state = {
            play: false,
            pause: true,
            src: 'public/mp3/audio-1.wav',
            controlled: true,
            currentSong: songs[0],
            position: 0,
            volume: 100,
            playbackRate: 1,
            loop: false,
            playStatus: Sound.status.PLAYING
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
    

    render() { console.log(this.state.src)
        return ( 
          <Home
          playStatus={this.state.playStatus}
          loop={loop}
          onPlay={() => this.setState({ playStatus: Sound.status.PLAYING })}
          onPause={() => this.setState({ playStatus: Sound.status.PAUSED })}
          onResume={() => this.setState({ playStatus: Sound.status.PLAYING })}
          onStop={() => this.setState({ playStatus: Sound.status.STOPPED, position: 0 })}
          onSeek={position => this.setState({ position })}
          onVolumeUp={() => this.setState({ volume: volume >= 100 ? volume : volume + 10 })}
          onVolumeDown={() => this.setState({ volume: volume <= 0 ? volume : volume - 10 })}
          onPlaybackRateUp={() => this.setState({ playbackRate: playbackRate >= 4 ? playbackRate : playbackRate + 0.5 })}
          onPlaybackRateDown={() => this.setState({ playbackRate: playbackRate <= 0.5 ? playbackRate : playbackRate - 0.5 })}
          onToggleLoop={e => this.setState({ loop: e.target.checked })}
          duration={this.state.currentSong ? this.state.currentSong.duration : 0}
          position={this.state.position}
          playbackRate={playbackRate}
        />
   
            <Sound
              url={this.state.currentSong.url}
              playStatus={this.state.playStatus}
              position={this.state.position}
              volume={volume}
              playbackRate={playbackRate}
              loop={loop}
              onLoading={({ bytesLoaded, bytesTotal }) => console.log(`${bytesLoaded / bytesTotal * 100}% loaded`)}
              onLoad={() => console.log('Loaded')}
              onPlaying={({ position }) => this.setState({ position })}
              onPause={() => console.log('Paused')}
              onResume={() => console.log('Resumed')}
              onStop={() => console.log('Stopped')}
              onFinishedPlaying={() => this.setState({ playStatus: Sound.status.STOPPED })}
            />
   
            <Sound
              url={this.state.currentSong.url}
              playStatus={this.state.playStatus}
              playFromPosition={this.state.position}
              volume={volume}
              playbackRate={playbackRate}
              loop={loop}
              onLoading={({ bytesLoaded, bytesTotal }) => console.log(`${bytesLoaded / bytesTotal * 100}% loaded`)}
              onLoad={() => console.log('Loaded')}
              onPlaying={({ position }) => console.log('Position', position)}
              onPause={() => console.log('Paused')}
              onResume={() => console.log('Resumed')}
              onStop={() => console.log('Stopped')}
              onFinishedPlaying={() => this.setState({ playStatus: Sound.status.STOPPED })}
            />
          )
        )}
      </div>
        )
    }
}
