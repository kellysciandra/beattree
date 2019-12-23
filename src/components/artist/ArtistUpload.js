import React from 'react'

import Button from 'react-bootstrap/Button'
import { Col, Form } from "react-bootstrap";

class ArtistUpload extends React.Component {

  constructor(props) {
    super(props);
    this.state ={
      file:null
    }
    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.fileUpload = this.fileUpload.bind(this)
  }
  onFormSubmit(e){
    e.preventDefault() // Stop form submit
    this.fileUpload(this.state.file).then((response)=>{
      console.log(response.data);
    })
  }
  onChange(e) {
    this.setState({file:e.target.files[0]})
  }

  fileUpload(file){
    const url = 'http://example.com/file-upload';
    const formData = new FormData();
    formData.append('file',file)
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
    // return  post(url, formData,config)
  }

  render() {
    return (
        <div>
      <Form className='signup' onSubmit={this.onFormSubmit}>
      <h1 className='title'>Hello Artist</h1>
       <h3 className='sub-title'>Create a Profile</h3>

        <Form.Group  as={Col}  controlId="formGridTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control type="email" placeholder="Beat Title" />
        </Form.Group>
  
  
       <Form.Group  as={Col} controlId="formGridMP3">
        <Form.Control className="upload" type="file" placeholder="Mp3" onChange={this.onChange} />
        </Form.Group>
     
        <Button variant="dark" type="submit">Submit</Button>
      </Form>
      </div>
   )
  }
}



export default ArtistUpload