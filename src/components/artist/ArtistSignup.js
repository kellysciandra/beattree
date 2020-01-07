import React, { Component } from "react";
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import { Col, Form } from "react-bootstrap";
import NavBar from '../layout/NavBar'
// import Artist from './Artist'

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";

class ArtistSignup extends Component {
  constructor(props) {
    super(props) 

    this.state = {
      email: '',
      password: '',
      city: '',
      state: '',
      errors: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  

// creating an artist object based on components state
// data object axios will POST to the Rails Server
// destructuring 
  handleSubmit = (event) => {
    event.preventDefault()

    const {email, password, city, state} = this.state

    axios
      .post(
        'http://localhost:3001/artists', 
        {
          artist: {
            email: email,
            password: password, 
            city: city, 
            state: state
          }
        },
      { withCredentials: true },
    )
    .then(response => { 
      if (response.data.status === 'created' ) {
        this.props.handleAuth(response.data.artist)
        this.redirect()
      }
    })
    .catch(error => console.log('api errors:', error))
  }
  redirect = () => {
    this.props.history.push('/artist')
}




  render() {  
    //destructuring
    const {email, password, city, state} = this.state
   
    return (
      <div>
      <NavBar loggedInStatus={this.props.loggedInStatus} handleLogout={this.props.handleLogout} />
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
       </Form.Row>
       <Button variant="dark" type="submit">Submit</Button>
     </Form>
      
   </div>

    )
  }
};

export default ArtistSignup