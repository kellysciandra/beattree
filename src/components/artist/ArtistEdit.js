import React, { Component } from 'react'
import  { editBeat } from '../../actions/beatActions'

import Button from 'react-bootstrap/Button'
import { Col, Form } from "react-bootstrap";
import { connect } from 'react-redux';
import ReactPlayer from "react-player"
import Card from 'react-bootstrap/Card'

class ArtistEdit extends Component {
  
    state = {
      link: ''
    }

    handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      })
    }

    handleSubmit = (event) => { 
      event.preventDefault()
      this.props.editBeat(this.state,this.props.artist.id)
      window.location.reload(false);
  }

    handleBack = () => {
      this.props.history.push('./')
    }


  render() { 

    const {link} = this.state

      return (
        <div>
        <br></br><br></br><br></br><br></br>

      <Card className='container-2'>
        <ReactPlayer 
            className='react-player'
            key={this.props.artist.id}
            url={this.props.artist.link}
            width='100%'
            height='50%'
            />
        </Card>
      
        <div>
        <Form  className='edit-beat' onSubmit={this.handleSubmit}>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridState">
        <Form.Label></Form.Label>
        <Form.Control type="link" name="link" placeholder="new-link" onChange={this.handleChange} value={link} />
        </Form.Group>
        </Form.Row>
        <Button variant="dark" type="submit">Submit</Button>
      </Form>
      {/* <div><Button className="button-back" onClick={() => this.handleBack()} type="submit">back</Button></div> */}
      
        </div>
      </div>
    )
    }
  }

  const mapStateToProps = (state) => {console.log(state)
    return {
      artist: state.artist.artist,
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
        editBeat: (new_link, artist_id) => dispatch(editBeat(new_link, artist_id)),
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(ArtistEdit)