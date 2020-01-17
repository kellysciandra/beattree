import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { connect } from 'react-redux'
import ReactPlayer from "react-player"

class Artist extends Component {
    constructor(props) {
        super(props)
        this.state = {
            artist: {}
        }
        // this.handleSubmit = this.handleSubmit.bind(this)
    }


    handleSubmit= () => {
        this.props.history.push('/artist/ArtistUpload');
       
      }

      handleMessages = () => {
          this.props.history.push('/artist/messages')
      }



    render() { 
        return (
            <div>
    
                <br></br><br></br><br></br><br></br>

                <Card className='container-2'>
                <div className='card-title'>PROFILE</div> 
                <div className='card-sub-title'>{this.props.artist.artist.email}</div>
                <div className='card-sub-title'>{this.props.artist.artist.city}, {this.props.artist.artist.state}</div>
                <Button className='button' type="button" onClick={this.handleSubmit} >Upload New Beat</Button> 
                <Button className='button' type="button" onClick={this.handleSubmit} >Delete Beat</Button> 
                <ReactPlayer 
                    className='react-player'
                    key={this.props.artist.artist.id}
                    url={this.props.artist.artist.link}
                    width='100%'
                    height='50%'
                    />
                </Card>
                <div>
                <Card className='container-2'>
                <div className='card-title'>FAVORITES</div> 
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

const mapStateToProps = (state) => {
    return {
      artist: state.artist,
      loggedIn: state.loggedIn
    }
  }

export default connect(mapStateToProps)(Artist)