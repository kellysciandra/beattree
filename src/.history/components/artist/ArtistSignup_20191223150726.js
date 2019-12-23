import React, { Component } from "react";
import Artist from './Artist'


import Button from 'react-bootstrap/Button'
import { Col, Form } from "react-bootstrap";


import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";

export default class ArtistSignup extends Component {
  constructor() {
    super() 
    this.state = {
      artists_url: 'http://localhost:3000/artists',
      artistId: '',
      name: '',
      email: '',
      password: '',
      city: '',
      state: '',
    }

  }

  formSubmit = () => {
    fetch(this.state.artists_url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: this.state.artistId,
        name: this.state.email,
        email: this.state.email,
        password: this.state.password,
        city: this.state.city,
        state: this.state.state,
      })
    })
    .then(response=>response.json())
    .then(data => this.setState({
      artistId: data.id,
      email: data.email,
      password: data.password,
      city: data.city, 
      state: data.state
    }))
   
}


  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  handleSubmit = e => {
    this.formSubmit(e)
    this.props.history.push('/artist')
  }

  render() { console.log(this.state)
    return (
      <div>
      <h1 className='title'>Hello Artist</h1>
      <h3 className='sub-title'>Create a Profile</h3>

     <Form className='signup' onSubmit={this.handleSubmit} onChange={this.handleChange}>
       <Form.Row>

       <Form.Group controlId="formGridEmail">
       <Form.Label>Email</Form.Label>
       <Form.Control type="email" name="email" placeholder="Enter email" />
       </Form.Group>

       <Form.Group as={Col} controlId="formGridPassword">
       <Form.Label>Password</Form.Label>
       <Form.Control type="password" name="password" placeholder="Password" />
       </Form.Group>
       </Form.Row>

       <Form.Row>
       <Form.Group as={Col} controlId="formGridCity">
       <Form.Label>City</Form.Label>
       <Form.Control name="city" />
       </Form.Group>

       <Form.Group as={Col} controlId="formGridState">
       <Form.Label>State</Form.Label>
       <Form.Control name="state" />
       </Form.Group>
       </Form.Row>

       <Button variant="dark" type="submit">Submit</Button>
     </Form>
      <span hidden ><Artist name={this.state.email} /></span>
     
   </div>

    )
  }
};

