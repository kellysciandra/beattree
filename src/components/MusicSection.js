import React, { Component } from 'react'

//components
// import NavBar from './layout/NavBar'
import Producer from './producer/Producer'

//constants
// import Constants from './Constants'

export default class MusicSection extends Component {

    constructor(props) { 
        super(props);

        this.state = {
            beats: [],
    }
}

componentWillMount(){
    const myHeaders = new Headers({
      "Content-Type": "application/json",
      Accept: "application/json"
    })
    fetch("http://localhost:3000/db.json", {
      headers: myHeaders,
    })
    .then(res => res.json())
    .then(data => this.setState (
      { 
        beats: data.beats
      }
    )) 
  }
    render() { 
        return (
            <div>
                <Producer songs={this.state.beats}/>
            </div>
            
        )
    }
}
