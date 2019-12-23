import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import { Form } from "react-bootstrap";

export default class Artist extends Component {

    handleSubmit= () => {
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
                <Form onSubmit={this.handleSubmit}>
                <Button className='button'  >Upload Beat</Button>
 
                </Form>
            </div>
        )
    }
}
