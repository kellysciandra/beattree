import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import NavBar from '../layout/NavBar'
import { connect } from 'react-redux'
import ArtistUpload from './ArtistUpload'
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
              <NavBar />
     
                <br></br><br></br><br></br><br></br>

                <Card  className='container-2' style={{ width: '55rem', display: 'flex' }}>
                <div className='card-title'>{this.props.artist.artist.email}</div> 
                <div className='card-sub-title'>{this.props.artist.artist.city}, {this.props.artist.artist.state}</div>
                <Button className='button' type="button" onClick={this.handleMessages} >Check Messages</Button>
                <Button className='button' type="button" onClick={this.handleSubmit} >Upload New Beat</Button> 
                <Button className='button' type="button" onClick={this.handleSubmit} >Delete Beat</Button> 
                <ReactPlayer 
                    className='audio'
                    key={this.props.artist.artist.id}
                    url={this.props.artist.artist.link}
                    width='100%'
                    height='50%'
                    />
                </Card>
                <div>
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