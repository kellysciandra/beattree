import React, { Component } from "react";
import {connect} from 'react-redux' 
import Button from 'react-bootstrap/Button'
import { Col, Form } from "react-bootstrap";
import NavBar from '../layout/NavBar'
import  { createArtist } from '../../actions/artistActions'
// import Artist from './Artist'

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";

class ArtistSignup extends Component {
  
  state = {
    email: '',
    password: '',
    city: '',
    state: '',
    link:''
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => { console.log(this.state)
    event.preventDefault()
    this.props.createArtist(this.state)
}

  render() {  
    //destructuring
    const {email, password, city, state, link} = this.state
   
    return (
      <div>
      <NavBar />
      <h1 className='title'>Hello Artist</h1>
      <h3 className='sub-title'>Create a Profile</h3>
      
     <Form className='signup' onSubmit={this.handleSubmit}>
       <Form.Row>

       <Form.Group controlId="formGridEmail">
       <Form.Label>Email</Form.Label>
       <Form.Control type="email" name="email" placeholder="Enter email" onChange={this.handleChange} value={email}/>
       </Form.Group>
      
       <Form.Group as={Col} controlId="formGridPassword">
       <Form.Label>Password</Form.Label>
       <Form.Control type="password" name="password" placeholder="Password" onChange={this.handleChange} value={password} />
       </Form.Group>
       </Form.Row>
       
       <Form.Row>
       <Form.Group as={Col} controlId="formGridCity">
       <Form.Label>City</Form.Label>
       <Form.Control type="city" name="city" placholder="City" onChange={this.handleChange} value={city} />
       </Form.Group>

       <Form.Group as={Col} controlId="formGridState">
       <Form.Label>State</Form.Label>
       <Form.Control type="city" name="state" placeholder="city" onChange={this.handleChange} value={state} />
       </Form.Group>
       
       <Form.Group as={Col} controlId="formGridState">
       <Form.Label>State</Form.Label>
       <Form.Control type="link" name="link" placeholder="link" onChange={this.handleChange} value={link} />
       </Form.Group>
       </Form.Row>
       <Button variant="dark" type="submit">Submit</Button>
     </Form>
   </div>

    )
  }
};

const mapDispatchToProps= dispatch => {
  return {
    createArtist: (artist) => dispatch(createArtist(artist))
  }
}

export default connect(null, mapDispatchToProps)(ArtistSignup)