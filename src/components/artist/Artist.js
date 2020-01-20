import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { connect } from 'react-redux'
import ReactPlayer from "react-player"


class Artist extends Component {

    handleSubmit= () => {
        this.props.history.push('/artist/ArtistUpload'); 
        // brings you to edit beat section
      }

      handleMessages = () => {
          this.props.history.push('/artist/messages')
          // brings you to messaging platform
      }

    render() { 

        const favorites = this.props.artist_favorites.map((favorite, id) => 
        <ReactPlayer 
        className='react-player'
        key={id}
        url={favorite.link}
        width='100%'
        height='50%'
        />)

        return (
            <div>
    
                <br></br><br></br><br></br><br></br>

                <Card className='container-2'>
                <div className='card-title'>PROFILE</div> 
                <div className='card-sub-title'>{this.props.artist.email}</div>
                <div className='card-sub-title'>{this.props.artist.city}, {this.props.artist.state}</div>
                <Button className='button' type="button" onClick={this.handleSubmit} >Edit Beat</Button> 
                <Button className='button' type="button" onClick={this.handleSubmit} >Delete Beat</Button> 
                <ReactPlayer 
                    className='react-player'
                    key={this.props.artist.id}
                    url={this.props.artist.link}
                    width='100%'
                    height='50%'
                    />
                </Card>
                <div>
                <Card className='container-2'>
                <div className='card-title'>FAVORITES</div> 
                {favorites}
                </Card>
                </div>

                <div>
                <Card className='container-2'>
                <div className='card-title'>MESSAGES</div> 
                </Card>
                </div>


            </div>
        )
    }
}

const mapStateToProps = (state) => { console.log(state)
    return {
      artist: state.artist.artist,
      loggedIn: state.artist.loggedIn,
      artist_favorites: state.beat.artist_favorites
    }
  }


export default connect(mapStateToProps)(Artist)