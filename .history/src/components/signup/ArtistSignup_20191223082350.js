import React, { Component } from "react";

import Button from 'react-bootstrap/Button'
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";

import { Col, Form } from "react-bootstrap";




export default class ArtistSignup extends Component {

  this.handleSubmit = () => {
    console.log('poop opopo fpo pdfo asd')
  }

  render() {
    return (
      <div>
      <h1 className='title'>Hello Artist</h1>
      <h3 className='sub-title'>Create a Profile</h3>
     <Form className='signup' onSubmit={this.handleSubmit}>
       <Form.Row>
       <Form.Group controlId="formGridEmail">
       <Form.Label>Email</Form.Label>
       <Form.Control type="email" placeholder="Enter email" />
       </Form.Group>

       <Form.Group as={Col} controlId="formGridPassword">
       <Form.Label>Password</Form.Label>
       <Form.Control type="password" placeholder="Password" />
       </Form.Group>
       </Form.Row>

       <Form.Row>
       <Form.Group as={Col} controlId="formGridCity">
       <Form.Label>City</Form.Label>
       <Form.Control />
       </Form.Group>

       <Form.Group as={Col} controlId="formGridState">
       <Form.Label>State</Form.Label>
       <Form.Control />
       </Form.Group>
       </Form.Row>

       <Button variant="dark" type="submit">Submit</Button>
     </Form>
   </div>

    )
  }
};

