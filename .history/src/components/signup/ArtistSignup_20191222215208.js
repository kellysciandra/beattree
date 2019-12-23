import React from "react";

import Button from 'react-bootstrap/Button'
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";

import { Col, Form } from "react-bootstrap";


function ArtistLogin() {
      return(
        <div>
        <h1 className='logo'>Create a Profile</h1>
    <Form className='signup'>
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


      <Button variant="dark" type="submit">
        Submit
      </Button>
    </Form>
</div>
    )
  };






export default ArtistLogin