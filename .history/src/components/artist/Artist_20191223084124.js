import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import { Form } from "react-bootstrap";

export default class Artist extends Component {

    handleSubmit= () => {
        if (Button.id === 1) {
        this.props.history.push('/artist/upload');
        }
      }

      handleMessages = () => {
          this.props.history.push('/artist/messages')
      }

    render() { console.log(Button.id)
        return (
            <div>
                <h1 className='title'>Hello Artist</h1>
                <h3 className='sub-title'>What would you like to do?</h3>
               <Form onSubmit={this.handleSubmit} >
                <Button id="1" className='button' type="submit" >Upload Beat</Button>
                <Button id="2" className='button' type="submit">Check Messages</Button>
                </Form>
            </div>
        )
    }
}
