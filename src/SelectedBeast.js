import { Button } from "react-bootstrap";
import React from "react";
import Modal from 'react-bootstrap/Modal';



class SelectedBeast extends React.Component{
 
 

  render(){
    console.log(this.props.devil);
    return(
    <>
    <Modal show={this.props.showModal}>
      <Modal.Header>
      <p>This is my Header</p>
      </Modal.Header>
      <Modal.Body>
        <img src={this.props.devil.image_url}></img>
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