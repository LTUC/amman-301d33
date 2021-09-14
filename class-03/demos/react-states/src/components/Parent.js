import React from 'react';
import ChildCat from './ChildCat';
import sherryImage from './assets/sherry2.jpg';

class Parent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            numberOfTunaInCabinnet: 15
        }
    }

    takeTunaFromCabinnet = () => {
        
        this.setState({
            numberOfTunaInCabinnet: this.state.numberOfTunaInCabinnet - 1
        })
    }

    render() {
        return (
            <>
                <h3>Parent</h3>
                <p>Number of canned Tuna in my cabinet {this.state.numberOfTunaInCabinnet}</p>
                <ChildCat
                    catName='sherry'
                    catImg={sherryImage}
                    decreaseTunaCab={this.takeTunaFromCabinnet}
                />
                <ChildCat
                    catName='arnaf'
                    catImg='https://www.thesprucepets.com/thmb/ke0i6JP3D7egC-6IWSneukqBaZo=/1414x1414/smart/filters:no_upscale()/GettyImages-1140917170-727bc42801da47c4ace4eb34940d2120.jpg'
                    decreaseTunaCab={this.takeTunaFromCabinnet}
                />
            </>
        )
    }
}

export default Parent;