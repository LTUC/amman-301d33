import React from 'react';

class Square extends React.Component {
    // console.log(this.props)
    render () {
        return(
            <div>Square {this.props.squareNo}</div>
        )
    }
}

export default Square;