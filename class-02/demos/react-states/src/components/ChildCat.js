import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


class ChildCat extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            numOfPets: 0
        }
    }

    // for adding 1 to the clicked on cat
    increaseNumberOfPets = () => {
        this.setState({
            numOfPets: this.state.numOfPets + 1
        })
    }

    render() {
        return (
            <div>
                {/* <p>{this.props.catName}</p>
                <p>{this.state.numOfPets}</p>
                <img onClick={this.increaseNumberOfPets} src={this.props.catImg} alt={this.props.catName} width={250} /> */}

                <Card style={{ width: '18rem' }}>
                    <Card.Img className='cardCat' variant="top" src={this.props.catImg} alt={this.props.catName} />
                    <Card.Body>
                        <Card.Title>{this.props.catName}</Card.Title>
                        <Card.Text>
                            Number of Pets {this.state.numOfPets}
                        </Card.Text>
                        <Button onClick={this.increaseNumberOfPets} variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>

        )
    }
}
export default ChildCat;