import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

class ArtistLogin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            errors: ''
        }
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
    }

    render() {
        const {email, password} = this.state
    return (
        <div>
        <h1 className='title'>Login u Artist</h1>
  
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
  

         <Button variant="dark" type="submit">Login</Button>
       
         <div>
            or <Link to='/signup'>sign up</Link>
          </div>
       
       
       </Form> 
     </div>
    )
    }
}

export default ArtistLogin;