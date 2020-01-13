import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import NavBar from '../layout/NavBar'
import { connect } from 'react-redux';

class Artist extends Component {
    constructor(props) {
        super(props)
        this.state = {
            artist: {}
        }
        // this.handleSubmit = this.handleSubmit.bind(this)
    }


    handleSubmit= () => {
        this.props.history.push('/artist/upload');
      }

      handleMessages = () => {
          this.props.history.push('/artist/messages')
      }



    render() {  
        return (
            <div>
            <NavBar />
                <h1 className='title'>Hello </h1>
                <h3 className='sub-title'>What would you like to do?</h3>
                <Button className='button' type="button" onClick={this.handleSubmit} >Upload Beat</Button> 
                <Button className='button' type="button" onClick={this.handleMessages} >Check Messages</Button>
            </div>
        )
    }
}

const mapStateToProps = ({ artist }) => ({ artist })

export default connect(mapStateToProps)(Artist)