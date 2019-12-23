import React, { Component } from 'react'


import ListGroup from 'react-bootstrap/ListGroup'

import 'bootstrap/dist/css/bootstrap.min.css';

export default class Producer extends Component {
    render() {
      
        function singleClick() {
            alert('play')
        }
        return (
        <ListGroup variant="flush">
        {this.props.songs.map(beat => 
        <ListGroup.Item action href={`#${beat.id}`} onHover={singleClick}>{beat.title}</ListGroup.Item>
        )}
        </ListGroup>
        )
    }
  
}


// render() { 
//     const beatItems = this.props.songs.map(beat => (
//         <Container bg="primary" style={{ width: '18rem' }}>
        
//         <Card text="blue" className="text-center" >
//         <Card.Header as="h5" key={beat.id}>{beat.title}</Card.Header>
//         <Card.Body>
//             <Card.Title>{beat.description}</Card.Title>
//             <Card.Text>
//             <a href={`#${beat.id}`} onClick={(e)=>this.props.handleAddToCart(e, beat)}> </a>
//             </Card.Text>
//             <Button variant="link">add to cart</Button>
//         </Card.Body>
//         <Card.Footer className="text-muted">2 days ago</Card.Footer>
//         </Card>
      
//         </Container>
        
//     ));

//     return (
//         <div className="row">
//             {beatItems}
//         </div>
//     )
// }