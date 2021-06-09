import React from 'react';
import { CardColumns, Container } from 'react-bootstrap';
import heart from './heart.png'
import Card from "react-bootstrap/Card";

class HornedBeast extends React.Component {

 

  constructor(props) {
    super(props);

    // initialize our state
    this.state = {
      likes: 0
    };
  }
  increaseLikes = () => {
    console.log("f");
    // increase the number remaining in the state by 1
    // We CANNOT set state manually except in the constructor
    // We should use this.setState to update state outside of the constructor
    this.setState({
      likes: this.state.likes + 1
    });

  }

  render() {

    return (
      <CardColumns>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={this.props.imgUrl} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
      </Card.Text>
          </Card.Body>
          <Card.Footer>

            <Card.Img style = {{width: 50}} id = "hearts" src={heart} alt="" width="50" height="50" onClick={this.increaseLikes} />
            
            <Card.Text>Likes: {this.state.likes}</Card.Text>
            <Card.Text>{this.props.description}</Card.Text>
          </Card.Footer>
        </Card>
        </CardColumns>
    );
  }
}

export default HornedBeast;


