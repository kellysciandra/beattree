import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import { Form } from "react-bootstrap";

export default class Artist extends Component {

    handleSubmit= () => {
        this.props.history.push('/artist/upload');
        }
      }

      handleMessages = () => {
          this.props.history.push('/artist/messages')
      }

    render() { 
        return (
            <div>
                <h1 className='title'>Hello Artist</h1>
                <h3 className='sub-title'>What would you like to do?</h3>
            
                <Button id="1" className='button' type="button" onClick={this.handleSubmit} >Upload Beat</Button> 
                <Button id="2" className='button' type="submit">Check Messages</Button>
          
            </div>
        )
    }
}
