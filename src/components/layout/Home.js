import React, { Component } from 'react'
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button'
import  { loadBeats } from '../../actions/beatActions'
import  { addToFavorites } from '../../actions/beatActions'
import ReactPlayer from "react-player"
import Card from 'react-bootstrap/Card'

class Home extends Component {

  state= {
    current_artist: '',
    favorite_artist:''
  }

  componentDidMount() {
    this.props.loadBeats()
  }

  handlePlay = (event) => {
    event.preventDefault()
  }

  handleClick = (favorite_artist_id) => {
    this.setState({
      current_artist: this.props.artist.id,
      favorite_artist: favorite_artist_id
    })
    console.log(this.state)
    this.render()
    this.addToFavorites()
  }


  addToFavorites= ()=> { 
   this.props.addToFavorites(this.state)
  }


    render() {  
      
      const players = this.props.beats.map( (beat, key) => 
      <ReactPlayer 
        id={beat.id}
        className='react-player' 
        key={beat.id} 
        url={beat.link} 
        width='100%' 
        height='50%'/>,
        )
      
        const card = players.map(link => 
        <Card 
        className='container-2'>
        {link}
        <Button onClick={() => {this.handleClick(link.key)}} className="button-2">ADD TO FAVORITES</Button>
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
     addToFavorites: (id) => dispatch(addToFavorites(id))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Home)