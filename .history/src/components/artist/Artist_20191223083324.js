import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'

export default class Artist extends Component {

    handleSubmit = () => {
        this.props.history.push('/');
      }

      handleMessages = () => {
          this.props.history.push('/artist/messages')
      }

    render() {
        return (
            <div>
                <h1 className='title'>Hello Artist</h1>
                <h3 className='sub-title'>What would you like to do?</h3>
                <Button className='button'  onSubmit={this.handleSubmit}>Upload Beat</Button>
                <Button className='button' onSubmit={this.handleMessages}>Check Messages</Button>
            </div>
        )
    }
}
