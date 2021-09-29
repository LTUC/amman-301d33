import React, { Component } from 'react'

class UpdateCatForm extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.updateCat} >
                    <input type="text" name='catName' defaultValue={this.props.catInfo.catName} />
                    <input type="text" name='catBreed' defaultValue={this.props.catInfo.catBreed} />
                    <input type="submit" value="Update Cat" />
                </form>
            </div>
        )
    }
}

export default UpdateCatForm
