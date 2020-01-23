import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button'
import { Col, Form } from "react-bootstrap";
import { Link } from 'react-router-dom'
import  { loginArtist } from '../../actions/artistActions'
import { Redirect } from 'react-router-dom'


import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";

class ArtistLogin extends Component {

    state = {
        email: '',
        password: '',
    }


    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
        }

    handleSubmit = (event) => { 
        event.preventDefault() 
        this.props.loginArtist(this.state)
    }

    render() { 
        // destructuring
        const {email, password} = this.state
        
      if (this.props.authError === 'LOGIN SUCCESS') return <Redirect to='/'/>

    return ( 
        <div>
        <h1 className='login-title'>ARTIST LOGIN</h1>
       <Form className='log-in' onSubmit={this.handleSubmit}>
         <Form.Row>
         <Form.Group controlId="formGridEmail">
         <Form.Label>Email</Form.Label>
         <Form.Control type="email" name="email" placeholder="Enter email"  onChange={this.handleChange} value={email} />
         </Form.Group>
         <Form.Group as={Col} controlId="formGridPassword">
         <Form.Label>Password</Form.Label>
         <Form.Control type="password" name="password" placeholder="Password"  onChange={this.handleChange} value={password} />
         </Form.Group>
         </Form.Row>
         <span className="login-failed">{this.props.authError}</span><br></br><br></br>
         <Button variant="dark" type="submit">Login</Button><br></br>
         <div>
            or <Link to='/artist/ArtistSignup'>sign up</Link>
          </div>
       </Form> 
     </div>
    )
    }
}

const mapStateToProps = (state)  => {console.log(state)
    return {
      authError: state.artist.authError
    }
  }

const mapDispatchToProps= dispatch => {
    return {
      loginArtist: (artist) => dispatch(loginArtist(artist))
      
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(ArtistLogin);