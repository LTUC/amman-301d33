import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import BeastModal from './BeastModal';
import Button from 'react-bootstrap/Button';

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      beastName: '',
      showModal: false
    }
  }

  handleClose = () => {
    this.setState({
      showModal: false
    })
  }

  beastNameButton = () => {
    this.setState({
      beastName: 'Rhino',
      showModal: true
    })
  }

  render() {
    return (
      <>
        <Button variant="info" onClick={this.beastNameButton}>Button 1</Button>
        <Button variant="info" onClick={this.beastNameButton}>Button 2</Button>

        <BeastModal
          show={this.state.showModal}
          handleClose={this.handleClose}
          beastTitle={this.state.beastName}
        />
      </>
    )
  }
}

export default Main;
