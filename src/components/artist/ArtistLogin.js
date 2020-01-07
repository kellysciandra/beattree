import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import NavBar from '../layout/NavBar'

import Button from 'react-bootstrap/Button'
import { Col, Form } from "react-bootstrap";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";

class ArtistLogin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            errors: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
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

        axios.post('http://localhost:3001/sessions', {artist}, {withCredentials: true})
        .then(response => { 
            if (response.data.logged_in) {
                this.props.handleAuth(response.data.artist)
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



    render() {
        const {email, password} = this.state
        
    return (
        <div>
         <NavBar loggedInStatus={this.props.loggedInStatus} handleLogout={this.props.handleLogout} />
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
            or <Link to='/artist/ArtistSignup'>sign up</Link>
          </div>
       
       
       </Form> 
     </div>
    )
    }
}

export default ArtistLogin;