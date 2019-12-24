import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'


export default class Producer extends Component {

    handleNew= () => {
        this.props.history.push('/');
      }

      handleMessages = () => {
          this.props.history.push('/producer/messages')
      }

    render() { 
        return (
            <div>
                <h1 className='title'>Hello Producer</h1>
                <h3 className='sub-title'>What would you like to do?</h3>
                <Button className='button' type="button" onClick={this.handleNew} >Check for New</Button> 
                <Button className='button' type="button" onClick={this.handleFavorites} >View My Favorites</Button> 
                <Button className='button' type="button" onClick={this.handleMessages} >Messages</Button>
          
            </div>
        )
    }
}