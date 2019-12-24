import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

import Button from 'react-bootstrap/Button'
import { Col, Form } from "react-bootstrap";

class ArtistLogin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            errors: ''
        }
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const {email, password} = this.state

        let artist = {
            email: email,
            password: password
        }

        axios.post('http://localhost:3001/login', {artist}, {withCredentials: true})
        .then(response => {
            if (response.data.logged_in) {
                this.props.handleLogin(response.data)
                this.redirect()
            } else {
                this.setState({
                    errors: response.data.errors
                })
            }
        })
        .catch(error => console.log('api errors:', error))
    }

    redirect = () => {
        this.props.history.push('/artist')
    }

    handleErrors = () => {
        return (
            <div> 
            <ul>
                {this.state.errors.map(error => {
                    return <li key={error}>{error}</li>
                })}
            </ul>
            </div>
        )
    }


    render() {
        const {email, password} = this.state
    return (
        <div>
        <h1 className='title'>Login u Artist</h1>
  
       <Form className='signup' onSubmit={this.handleSubmit} onChange={this.handleChange}>
         <Form.Row>
  
         <Form.Group controlId="formGridEmail">
         <Form.Label>Email</Form.Label>
         <Form.Control type="email" name="email" placeholder="Enter email" value={email} />
         </Form.Group>
  
         <Form.Group as={Col} controlId="formGridPassword">
         <Form.Label>Password</Form.Label>
         <Form.Control type="password" name="password" placeholder="Password" value={password} />
         </Form.Group>
         </Form.Row>
  

         <Button variant="dark" type="submit">Login</Button>
       
         <div>
            or <Link to='/signup'>sign up</Link>
          </div>
       
       
       </Form> 
     </div>
    )
    }
}

export default ArtistLogin;