import axios from 'axios';
import React from 'react'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cats: []
    }
  }

  // componentDidMount = async ()=>{
  //   console.log('inside componentDidMount')
  //   let catsData = await axios.get(`${process.env.REACT_APP_SERVER}/getCatsOwner?ownerName=razan`)
  //   this.setState({
  //     cats: catsData.data
  //   })
  //   console.log('aaaaaaaaaa',this.state.cats)
  // }

  getCats = async (e) => {
    e.preventDefault();

    let ownerName = e.target.catOwner.value;
    console.log(ownerName);

    // localhost:3001/getCatsOwner?ownerName=razan
    let catsData = await axios.get(`${process.env.REACT_APP_SERVER}/getCatsOwner?ownerName=${ownerName}`)
    this.setState({
      cats: catsData.data
    })
    console.log(this.state.cats)

  }

  render() {
    return (
      <div>
        <form onSubmit={this.getCats}>
          <label>Enter your name</label>
          <input type="text" name='catOwner' />
          <input type="submit" value="get cats" />
        </form>
        {/* render the cats data */}
        {/* {this.state.cats.map
        <Cat/>} */}
      </div>
    )
  }
}

export default App
