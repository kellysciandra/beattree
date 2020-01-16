import React, { Component } from 'react'
import NavBar from '../layout/NavBar'
import  { editArtist } from '../../actions/artistActions'
import Button from 'react-bootstrap/Button'
import { Col, Form } from "react-bootstrap";
import { connect } from 'react-redux';


class ArtistUpload extends Component {
  
  state = {
    link: ''
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => { console.log(this.state)
    event.preventDefault()
    this.props.editArtist(this.state)
}


render() { console.log(this.props)

  const {link} = this.state

    return (

 
      <div>
      <NavBar />
       <Form className='signup' onSubmit={this.handleSubmit}>
       <Form.Row>
        <Form.Group as={Col} controlId="formGridState">
       <Form.Label></Form.Label>
       <Form.Control type="link" name="link" placeholder="link" onChange={this.handleChange} value={link} />
       </Form.Group>
       </Form.Row>
       <Button variant="dark" type="submit">Submit</Button>
     </Form>


      </div>
   )
  }
}

const mapStateToProps = (state) => {
  return {
    artist: state.artist,
    loggedIn: state.loggedIn
  }
}

const mapDispatchToProps= dispatch => {
  return {
    editArtist: (artist) => dispatch(editArtist(artist))
  }
}

export default connect(null, mapDispatchToProps)(ArtistUpload)