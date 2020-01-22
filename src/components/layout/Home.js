import React, { Component } from 'react'
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button'
import { Form } from "react-bootstrap";
import ReactPlayer from "react-player"
import Card from 'react-bootstrap/Card'


//actions
import  { loadBeats } from '../../actions/beatActions'
import  { addToFavorites } from '../../actions/beatActions'
import  { sendMessage } from '../../actions/messageActions'


class Home extends Component {

  state = {
    message: ''
  }

  componentDidMount() {
    this.props.loadBeats()
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSendMessage = (favorite_artist_id) => { 
    this.props.sendMessage(favorite_artist_id, this.state.message)
    this.setState({
      message: ''
    })
  }


    handleAddToFavorites = (favorite_artist_id, link) => { 
    this.props.addToFavorites(favorite_artist_id, this.props.artist.id, link)
  }


    render() { 
      const { message } = this.state

      const players = this.props.beats.map( (beat, key) => 
      <ReactPlayer 
        id={beat.id}
        className='react-player' 
        key={beat.id} 
        url={beat.link}
        link={beat.link} 
        width='100%' 
        height='50%'/>)
      
        const card = players.map(link =>  
        <Card className='main-card'>
        {link}
        <Button onClick={() => {this.handleAddToFavorites(link.key, link.props.link)}} className="main-card-buttons">ADD TO FAVORITES</Button>
        <Form className='send-message'>
        <Form.Control type="message" name="message" placeholder="message" onChange={(e) => this.handleChange(e)} value={message} />
        </Form>
        <Button type="submit" onClick={() => this.handleSendMessage(link.key)} className="main-card-buttons">SEND MESSAGE</Button>
        </Card>)
        

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
      messages: state.artist.messages,
      favorites: state.artist.favorites,
      beats: state.beat.beats
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
     loadBeats: () => dispatch(loadBeats()),
     addToFavorites: (favorite_artist_id, artist_id, link) => dispatch(addToFavorites(favorite_artist_id, artist_id, link)),
     sendMessage: (favorite_artist_id, current_artist_id, message) => dispatch(sendMessage(favorite_artist_id, current_artist_id, message))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Home)