import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap/";

class UserDataModal extends React.Component {
  render() {
    return (
      <>
        <Modal show={this.props.showModal} onHide={this.props.closeHandler}>
          <Modal.Header closeButton>
            <Modal.Title>Cats</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h2>welcome {this.props.userName}</h2>
            <h3>your age is {this.props.age}</h3>
            <h4>your best cat breed is {this.props.breed}</h4>
            <p>do you like cats {this.props.likeCats ? "yes" : "no"}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.closeHandler}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default UserDataModal;
