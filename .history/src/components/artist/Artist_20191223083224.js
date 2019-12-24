import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'

export default class Artist extends Component {

    handleUpload = () => {
        this.props.history.push('/artist/upload');
      }

      handleMessages = () => {
          this.props.history.push('/artist/messages')
      }

    render() {
        return (
            <div>
                <h1 className='title'>Hello Artist</h1>
                <h3 className='sub-title'>What would you like to do?</h3>
                <Button className='button'  onSubmit={this.handleUpload}>Upload Beat</Button>
                <Button className='button' onSubmit={this.handleMessages}>Check Messages</Button>
            </div>
        )
    }
}
