import React, { Component } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Sound from 'react-sound'



export default class ArtistBeats extends Component {
    constructor() {
        super()
        this.state = {
            beats: [],
            files: []
        }
    }

    componentDidMount = () => {
        this.fetch()
    }
        
    fetch = () => {
        axios({
            method: 'GET',
            url: 'http://localhost:3001/beats',
            responseType: 'json',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(response => { 
           this.setState({
               files: response.data
           })
            }) 
    }



    handlePlay = (src) => {
      
    }

    renderButtonAndSound = () => { 
        return  Object.values(this.state.files).map((file,index) => {

            return (
            <Button key={index} type="audio/mp3" onClick={() => this.handlePlay({file})} variant="light" className='container-1'>▶
            </Button>
            )
        })
    }

    render () {  console.log(this.state.files)
  
    return (
        <div>            
        <h2 className="logo">BeatTree</h2>
                {this.renderButtonAndSound()} 
            <Sound
            url={this.state.files}
            playStatus={Sound.status.PLAYING}
            onLoading={this.handleSongLoading}
            onPlaying={this.handleSongPlaying}
            onFinishedPlaying={this.handleSongFinishedPlaying}
            />

        </div>
        )
    }  
}