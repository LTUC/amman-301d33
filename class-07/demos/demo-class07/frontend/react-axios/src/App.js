import React from 'react';
import axios from 'axios';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pokeDatInfo:{}
    }
  }

  getPokeInfo = async () =>{
    let url = `${process.env.REACT_APP_SERVER_LINK}/getPokemon?pokeName=charizard&pokeLevel=10`;
    let pokeData = await axios.get(url)
    console.log(pokeData)
    this.setState({
      pokeDatInfo:pokeData.data
    })
  }

  render() {
    return (
      <div>
        <h2>Class07 Demo</h2>
        <button onClick={this.getPokeInfo}>Get Poke Info</button>
        <p>{this.state.pokeDatInfo.name}</p>
      </div>
    )
  }
}

export default App;
