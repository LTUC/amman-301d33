import React, { Component } from 'react';

class Photo extends Component {
    render() {
        return (
            <div>
                <img src={this.props.photoItem.imageUrl} alt="ddd" />
            </div>
        )
    }
}

export default Photo
