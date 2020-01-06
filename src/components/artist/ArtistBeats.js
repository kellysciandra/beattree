import React, { Component } from 'react'
import axios from 'axios';
import Button from 'react-bootstrap/Button'
import {Howl, Howler} from 'howler';


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
                beats: response.data.beats
            })
            // this.state.beats.map((beat) => this.setState({
            //     files: beat.file
            // }))
        })
    }



    handlePlay = (src) => {
        const sound = new Howl({
          src
        })
      sound.play()
    }

    renderButtonAndSound = () => { 
        return  Object.keys(this.state.beats).map((beat, index) => {

            return (
            <Button key={index} onClick={() => this.handlePlay(beat.play)} variant="light" className='container-1'>▶
            </Button>
            )
        })
    }

    render () { 
        Howler.volume(1.0)
    return (
        <div>            
        <h2 className="logo">BeatTree</h2>
                {this.renderButtonAndSound()} 
            </div>
        )
    }  
}