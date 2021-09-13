import React from 'react';
import ChildCat from './ChildCat';
import sherryImage from './assets/sherry2.jpg';

class Parent extends React.Component {
    render() {
        return (
            <>
                <h3>Parent</h3>
                <ChildCat catName='sherry' catImg={sherryImage}/>
                <ChildCat catName='arnaf' catImg='https://www.thesprucepets.com/thmb/ke0i6JP3D7egC-6IWSneukqBaZo=/1414x1414/smart/filters:no_upscale()/GettyImages-1140917170-727bc42801da47c4ace4eb34940d2120.jpg'/>
            </>
        )
    }
}

export default Parent;