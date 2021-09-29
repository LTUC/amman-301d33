import React, { Component } from 'react';

class AddCatForm extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.addCatFunc} >
                    <input type="text" name='catName' placeholder='enter cat name' />
                    <input type="text" name='catBreed' placeholder='enter cat breed' />
                    <input type="submit" value="Add Cat" />
                </form>
            </div>
        )
    }
}

export default AddCatForm
