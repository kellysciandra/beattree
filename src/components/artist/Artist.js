import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { connect } from 'react-redux'
import ReactPlayer from "react-player"

// Container Components
import MessageBoard from './MessageBoard'
import FavoritesBoard from './FavoritesBoard'

class Artist extends Component {


    handleSubmit= () => {
        this.props.history.push('/artist/ArtistEdit'); 
        // brings you to edit beat section
      }

    render() { 
        return (
            <div>
                <br></br><br></br><br></br><br></br> 
                <Card className='artist-container'>
                <div className='card-title'>Artist</div> 
                <div className='card-sub-title'>{this.props.artist.email}</div>
                <div className='card-sub-title'>{this.props.artist.city}, {this.props.artist.state}</div>
                <Button className='button' type="button" onClick={this.handleSubmit} >Edit Beat</Button>
                <ReactPlayer 
                    controls= {true}
                    className='react-player'
                    key={this.props.artist.id}
                    url={this.props.artist.link}
                    width='100%'
                    height='50%'
                    />
                </Card>
                
                <div>
                <Card className='artist-container'>
                <div className='card-title'>FAVORITES</div> 
                <FavoritesBoard favorites={this.props.favorites}/>
                </Card>
                </div>

                <div>
                <Card className='artist-container'>
                <div className='card-title'>MESSAGES</div>  
                <MessageBoard messages={this.props.messages}/>
                </Card>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => { 
    return {
      artist: state.artist.artist,
      loggedIn: state.artist.loggedIn,
      favorites: state.artist.favorites,
      messages: state.artist.messages
    }
  }

export default connect(mapStateToProps)(Artist)