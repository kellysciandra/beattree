import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { connect } from 'react-redux'
import ReactPlayer from "react-player"

class Artist extends Component {




   componentDidMount() {
   }

    handleSubmit= () => {
        this.props.history.push('/artist/ArtistEdit'); 
        // brings you to edit beat section
      }

      handleMessages = () => {
          this.props.history.push('/artist/messages')
          // brings you to messaging platform
      }

    //   renderFavorites = () => this.props.favorites.map((favorite,id) => {
    //     return <ReactPlayer className='react-player' key={id} id={id} url={favorite.link} width='100%'
    //     height='50%'/>
    //   })



    render() { 

    const favorites = this.props.loggedIn? this.props.favorites.map((favorite, id) =>
    <ReactPlayer 
    className='react-player'
    key={id}
    url={favorite.link}
    width='100%'
    height='50%'
    />):<div>LOADINGGGGG</div>

    // const messages = this.props.messages ?  this.props.messages.map((message,id) => message):<div>LOADINGGGGG</div>

       

        return (
            <div>
                <br></br><br></br><br></br><br></br> 
                <Card className='container-2'>
                <div className='card-title'>Artist</div> 
                <div className='card-sub-title'>{this.props.artist.email}</div>
                <div className='card-sub-title'>{this.props.artist.city}, {this.props.artist.state}</div>
                <Button className='button' type="button" onClick={this.handleSubmit} >Edit Beat</Button>
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
                {/* <div>{messages}</div> */}
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