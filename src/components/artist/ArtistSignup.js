import React, { Component } from "react";
import {connect} from 'react-redux' 
import Button from 'react-bootstrap/Button'
import { Col, Form } from "react-bootstrap";
import  { createArtist } from '../../actions/artistActions'
import { Redirect } from 'react-router-dom'


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

  handleSubmit = (event) => { 
    event.preventDefault()
    this.props.createArtist(this.state)
}

  render() {  
    if (this.props.authError === 'SIGNUP SUCCESS') return <Redirect to='/'/>

    //destructuring
    const {email, password, city, state, link} = this.state
    
   
    return (
      <div>
      <h1 className='signup-title'>ARTIST SIGNUP</h1>
      <h3 className='sub-title'>Create a Profile</h3>
      
     <Form className='signup-form' onSubmit={this.handleSubmit}>
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
       
       <Form.Group as={Col} controlId="formGridLink">
       <Form.Label for='validationServer01' >SoundCloud Link</Form.Label>
       <Form.Control type="link" name="link" placeholder="link" onChange={this.handleChange} value={link} />
       <div class='valid-feedback'>looks good</div>
       </Form.Group>
       </Form.Row>
       <span className="login-failed">{this.props.authError}</span><br></br><br></br>

       <Button variant="dark" type="submit">Submit</Button>
     </Form>
   </div>

    )
  }
};

const mapStateToProps = (state)  => {console.log(state)
  return {
    authError: state.artist.authError
  }
}

const mapDispatchToProps= dispatch => {
  return {
    createArtist: (artist) => dispatch(createArtist(artist))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtistSignup)