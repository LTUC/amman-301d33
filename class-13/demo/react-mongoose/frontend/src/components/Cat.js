import React, { Component } from 'react'

class Cat extends Component {

    deleteCatHandler = () =>{
        this.props.deleteCatFunc(this.props.cat._id)
    }
    render() {
        return (
            <>
                <div key={this.props.idx}>
                    {this.props.cat.catName}
                    {this.props.cat.catBreed}
                    <button onClick={this.deleteCatHandler}>X</button>
                    {/* <button onClick={()=>{this.props.deleteCatFunc(this.props.cat._id)}}>X</button> */}
                </div>
            </>
        );
    }
}

export default Cat;
