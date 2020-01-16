import React, { Component } from 'react'
import { connect } from 'react-redux';
// import Beats from '../audio/Beats'
// import { NavLink } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import  { loadBeats } from '../../actions/beatActions'
import NavBar from './NavBar'
// import mp3 from "../audio/audio.mp3";
import ReactPlayer from "react-player"

class Home extends Component {

  componentDidMount() {
    this.props.loadBeats()
  }

  handlePlay = (event) => {
    event.preventDefault()
  }


    render() {  console.log(this.props)
      
      
      const links = this.props.beats.map((artist) =>  <ReactPlayer 
      className='react-player'
      key={artist.id}
      url={artist.link}
        width='100%'
        height='50%'
      />)
    

        return  (
            <div>
                    <NavBar loggedIn={this.props.loggedIn} artist={this.props.artist} />
                <h2 className= "logo"> BeatTree </h2>
                    {/* <Button onClick={this.handlePlay.bind(this)} variant="light" className='container-1'>▶
                    </Button>
                    <Button variant="light"  className='container-1'>▶
                    </Button>
                    <Button variant="light"  className='container-1'>▶
                    </Button>
                    <Button variant="light"  className='container-2'>▶
                    </Button>
                    <Button variant="light"  className='container-2'>▶
                    </Button>
                    <Button variant="light"  className='container-2'>▶
                    </Button> */}
                    <div className='player-wrapper'>
                    {/* <ReactPlayer 
                    className='react-player'
                    url="https://soundcloud.com/roddyricch/the-box"
                      width='50%'
                      height='50%'
                    />
                       <ReactPlayer 
                    className='react-player'
                    url="https://soundcloud.com/roddyricch/the-box"
                      width='50%'
                      height='50%'
                    />
                       <ReactPlayer 
                    className='react-player'
                    url={links}
                      width='50%'
                      height='50%'
                    /> */}
                    
                    </div>
                   {links}
             </div>
        )
    }
}

const mapStateToProps = (state)  => {
    return {
      beats: state.beat.beats
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
     loadBeats: () => dispatch(loadBeats())
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Home)