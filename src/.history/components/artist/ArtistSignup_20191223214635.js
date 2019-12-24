import React, { Component } from "react";
import axios from 'axios'

import Button from 'react-bootstrap/Button'
import { Col, Form } from "react-bootstrap";


import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";

class ArtistSignup extends Component {
  constructor() {
    super() 
    this.state = {
      email: '',
      password: '',
      city: '',
      state: '',
      errors: ''
    }

  }

  handleChange = event => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

// creating an artist object based on components state
// data object axios will POST to the Rails Server
  handleSubmit = (event) => {
    event.preventDefault()
    const {email, password, city, state} = this.state

    let artist = {
      email: email, 
      password: password,
      city: city,
      state: state
    }

    axios.post('http://localhost:3001/artists', {artist}, {withCredentials: true})
    .then(response => { 
      if (response.data.status === 'created') {
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
          })
        }
        </ul>
      </div>
    )
  }

  render() {
    const {email, password, city, state} = this.state
    return (
      <div>

      <h1 className='title'>Hello Artist</h1>
      <h3 className='sub-title'>Create a Profile</h3>

     <Form className='signup' onSubmit={this.handleSubmit} onChange={this.handleChange}>
       <Form.Row>

       <Form.Group controlId="formGridEmail">
       <Form.Label>Email</Form.Label>
       <Form.Control type="email" name="email" placeholder="Enter email" defaultValue={email}/>
       </Form.Group>

       <Form.Group as={Col} controlId="formGridPassword">
       <Form.Label>Password</Form.Label>
       <Form.Control type="password" name="password" placeholder="Password" defaultValue={password} />
       </Form.Group>
       </Form.Row>

       <Form.Row>
       <Form.Group as={Col} controlId="formGridCity">
       <Form.Label>City</Form.Label>
       <Form.Control type="city" name="city" placholder="City" defaultValue={city} />
       </Form.Group>

       <Form.Group as={Col} controlId="formGridState">
       <Form.Label>State</Form.Label>
       <Form.Control type="city" name="state" placeholder="city" defaultValue={state} />
       </Form.Group>
       </Form.Row>

       <Button variant="dark" type="submit">Submit</Button>
     </Form>

     
   </div>

    )
  }
};

export default ArtistSignup