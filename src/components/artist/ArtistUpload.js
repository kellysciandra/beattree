import React, { Component } from 'react'

import Button from 'react-bootstrap/Button'
import { Col, Form } from "react-bootstrap";
import axios from 'axios';
import { connect } from 'react-redux';


class ArtistUpload extends Component {
  
  state = {
    title: '',
    newFile: null,
  }
  
  onFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData()
    formData.append('file', this.state.title)
    formData.append('file', this.state.newFile)

    axios({
      method: 'POST',
      url: 'http://localhost:3001/beats',
      data: formData,
      config: { 
        headers: {'Content-Type': 'multipart/form-data'}
      }
    }).then(this.redirect())
  };

  redirect = () => {
    this.props.history.push('/artist/show')
}

handleChange = (e) => {
  this.setState({
    newFile: e.currentTarget.files[0]
  });
};
  

  render() { 
    return (
        <div>
      <Form className='signup' onSubmit={this.onFormSubmit}>
      <h1 className='title'>Hello Artist</h1>
       <h3 className='sub-title'>Create a Profile</h3>
      
        <Form.Group  as={Col}  controlId="formGridTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control type="title" placeholder="Beat Title" />
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