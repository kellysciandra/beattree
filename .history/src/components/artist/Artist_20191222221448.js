import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'

export default class Artist extends Component {
    render() {
        return (
            <div>
                <h1 className='title'>Hello Artist</h1>
                <h3 className='sub-title'>What would you like to do?</h3>
                <Button className='button'>Upload Beat</Button>
                <Button className='button'>Check Messages</Button>
            </div>
        )
    }
}
