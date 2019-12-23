import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'


export default class Artist extends Component {
    constructor(props) {
        super(props) 
        this.state (
            name: this.props.name
        )
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
                <h1 className='title'>Hello {console.log(this.props.name)}</h1>
                <h3 className='sub-title'>What would you like to do?</h3>
            
                <Button className='button' type="button" onClick={this.handleSubmit} >Upload Beat</Button> 
                <Button className='button' type="button" onClick={this.handleMessages} >Check Messages</Button>
          
            </div>
        )
    }
}
