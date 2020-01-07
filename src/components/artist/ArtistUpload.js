import React, { Component } from 'react'
import NavBar from '../layout/NavBar'

import Button from 'react-bootstrap/Button'
import { Col, Form } from "react-bootstrap";
import axios from 'axios';
import { connect } from 'react-redux';


class ArtistUpload extends Component {
  
  state = {
    title: '',
    newFile: null,
    artist_id: ''
  }

  
  onFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData()
    formData.append('file', this.state.newFile)
    formData.append('artist_id', this.props.artist.id)
    formData.append('title', this.state.title)

    axios({
      method: 'POST',
      url: 'http://localhost:3001/beats',
      data: formData,
      config: { 
        headers: {'Content-Type': 'multipart/form-data'}
      }
    }).then(response => console.log(response))           
  };

  redirect = () => {
    this.props.history.push('/artist/show')
}

handleChange = (e) => {
  this.setState({
    newFile: e.currentTarget.files[0],
  });
};

handleTitleChange = event => {
  this.setState({
    title: event.target.value
  })
}


  
  render() { console.log(this.state)
    return (
        <div>
      <NavBar loggedInStatus={this.props.loggedInStatus} handleLogout={this.props.handleLogout} />
      <Form className='signup' onSubmit={this.onFormSubmit}>
      <h1 className='title'>Hello {this.props.artist.email}</h1>
       <h3 className='sub-title'>Create a Profile</h3>
      
        <Form.Group  as={Col}  controlId="formGridTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control type="title" placeholder="Beat Title" onChange={this.handleTitleChange}/>
        </Form.Group>
  
  
       <Form.Group  as={Col} controlId="formGridMP3">
        <Form.Control className="upload" type="file" placeholder="Mp3" onChange={this.handleChange}/>
      {this.props.type === "file" ? "files" : "mp3"}
        </Form.Group>
     
        <Button variant="dark" type="submit">Submit</Button>
      </Form>
      </div>
   )
  }
}

const mapStateToProps = state => {
  return {
    user: state.currentUser
  }
}



export default connect(mapStateToProps)(ArtistUpload)