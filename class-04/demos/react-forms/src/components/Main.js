import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap/";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
import UserDataModal from "./UserDataModal.js";
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      userName: "",
      age: "",
      breed: "",
      likeCats: "",
    };
  }
  submitHandler = async (event) => {
    event.preventDefault();
    await this.setState({
      userName: event.target.userName.value,
      age: event.target.age.value,
      breed: event.target.breed.value,
      likeCats: event.target.likeCats.checked,
      showModal: true,
    });
    console.log("userName", this.state.likeCats);
  };
  closeHandler = () => {
    this.setState({
      showModal: false,
    });
  };
  render() {
    return (
      <>
        <h3>Main Form</h3>
        <Form onSubmit={this.submitHandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              name="userName"
              type="text"
              placeholder="please enter your name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Age</Form.Label>
            <Form.Control
              name="age"
              type="text"
              placeholder="please enter your age"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              name="likeCats"
              type="checkbox"
              label="Do you like cats"
            />
          </Form.Group>
          <Form.Label>what is your favorite cat breed?</Form.Label>
          <Form.Select name="breed" aria-label="Default select example">
            <option>Open this select menu</option>
            <option value="angora">angora</option>
            <option value="persian">persian</option>
            <option value="baldi">baldi</option>
          </Form.Select>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <UserDataModal
          showModal={this.state.showModal}
          closeHandler={this.closeHandler}
          userName={this.state.userName}
          breed={this.state.breed}
          age={this.state.age}
          likeCats={this.state.likeCats}
        />
      </>
    );
  }
}
export default Main;
