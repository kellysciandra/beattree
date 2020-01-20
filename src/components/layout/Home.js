import React, { Component } from 'react'
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button'
import  { loadBeats } from '../../actions/beatActions'
import  { addToFavorites } from '../../actions/beatActions'
import ReactPlayer from "react-player"
import Card from 'react-bootstrap/Card'

class Home extends Component {

  componentDidMount() {
    this.props.loadBeats()
  }

  handlePlay = (event) => {
    event.preventDefault()
  }

  handleClick = (favorite_artist_id, link) => { 
    this.props.addToFavorites(favorite_artist_id, this.props.artist.id, link)
  }


    render() {  console.log(this.props)
      const players = this.props.beats.map( (beat, key) => 
      <ReactPlayer 
        id={beat.id}
        className='react-player' 
        key={beat.id} 
        url={beat.link}
        link={beat.link} 
        width='100%' 
        height='50%'/>,
        )
      
        const card = players.map(link =>  
        <Card 
        className='container-2'>
        {link}
        <Button onClick={() => {this.handleClick(link.key, link.props.link)}} className="button-2">ADD TO FAVORITES</Button>
        <Button className="button-2">SEND MESSAGE</Button>
        </Card>
        )
        return  (
            <div>
                <h2 className= "logo"> BeatTree </h2>
                <span >{card}</span>
             </div>
        )
    }
}

const mapStateToProps = (state)  => { 
    return {
      artist: state.artist.artist,
      beats: state.beat.beats
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
     loadBeats: () => dispatch(loadBeats()),
     addToFavorites: (favorite_artist_id, current_artist_id, link) => dispatch(addToFavorites(favorite_artist_id, current_artist_id, link))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Home)