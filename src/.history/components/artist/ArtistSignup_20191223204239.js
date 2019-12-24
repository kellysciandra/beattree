import React, { Component } from "react";
import axios from 'axios'

import Button from 'react-bootstrap/Button'
import { Col, Form } from "react-bootstrap";


import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";

export default class ArtistSignup extends Component {
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

  handleChange = e => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }


  handleSubmit = e => {
    e.preventDefault()
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
       <Form.Control type="email" name="email" placeholder="Enter email" value={email} />
       </Form.Group>

       <Form.Group as={Col} controlId="formGridPassword">
       <Form.Label>Password</Form.Label>
       <Form.Control type="password" name="password" placeholder="Password" value={password} />
       </Form.Group>
       </Form.Row>

       <Form.Row>
       <Form.Group as={Col} controlId="formGridCity">
       <Form.Label>City</Form.Label>
       <Form.Control type="city" name="city" placholder="City" value={city} />
       </Form.Group>

       <Form.Group as={Col} controlId="formGridState">
       <Form.Label>State</Form.Label>
       <Form.Control type="city" name="state" placeholder="city" value={city} />
       </Form.Group>
       </Form.Row>

       <Button variant="dark" type="submit">Submit</Button>
     </Form>
      <span hidden ><Artist name={this.state.email} /></span>
     
   </div>

    )
  }
};

