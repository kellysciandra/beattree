import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button'
import { Col, Form } from "react-bootstrap";
import NavBar from '../layout/NavBar'
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

    componentWillMount = () => {
        // if (this.props.artist)
        // console.log(this.props.artist)
        // this.props.history.push('/artist')
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

    render() { console.log(this.props)
        // destructuring
        const {email, password} = this.state
        
      if (this.props.authError === 'LOGIN SUCCESS') return <Redirect to='/artist'/>
        
       
    return ( 
        <div>
         <NavBar artist={this.props.artist} loggedIn={this.props.loggedIn}/>
        <h1 className='title'>Login u Artist</h1>
       <Form className='signup' onSubmit={this.handleSubmit}>
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
         <span className="nav-bar">{this.props.authError}</span><br></br><br></br>
         <Button variant="dark" type="submit">Login</Button>
         <div>
            or <Link to='/artist/ArtistSignup'>sign up</Link>
          </div>
       </Form> 
     </div>
    )
    }
}

const mapStateToProps = (state)  => {
    return {
      artist: state.artist.artist,
      loggedIn: state.artist.loggedIn,
      authError: state.artist.authError
    }
  }

const mapDispatchToProps= dispatch => {
    return {
      loginArtist: (artist) => dispatch(loginArtist(artist))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(ArtistLogin);