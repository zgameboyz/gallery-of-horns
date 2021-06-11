import { Button } from "react-bootstrap";
import React from "react";
import Modal from 'react-bootstrap/Modal';
import "./selectedBeast.css";



class SelectedBeast extends React.Component{
 
 

  render(){
    console.log(this.props.devil);
    return(
    <>
    <Modal show={this.props.showModal}>
      <Modal.Header>
      <p>{this.props.devil && this.props.devil.title}</p>
      </Modal.Header>
      <Modal.Body>
        <img src={this.props.devil && this.props.devil.image_url} alt ="blah"></img>
      </Modal.Body>
      <Modal.Footer>
      <Button onClick={this.props.hideModal}>Close</Button>
      </Modal.Footer>
    </Modal>
    </>
    )
  }
}
export default SelectedBeast;