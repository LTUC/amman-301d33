import React from 'react'
import axios from 'axios';
import Photo from './components/Photo';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      photoQuery: '',
      photoQueryResult: []
    }
  }

  getPhotos = async (e) =>{
    e.preventDefault()
    console.log('inside getPhotos function')
    // http://localhost:3001/getPhoto?searchQuery=flower

    await this.setState({
      photoQuery: e.target.photoQuery.value
    })

    let url = `${process.env.REACT_APP_SERVER_LINK}/getPhoto?searchQuery=${this.state.photoQuery}`
    // console.log(url)
    let photoResult = await axios.get(url);
    console.log('sssssss',photoResult.data)
    await this.setState({
      photoQueryResult: photoResult.data
    })
  }

  render() {
    return (
      <div>

        <h3>Class08-demo</h3>
        <form onSubmit={this.getPhotos}>
          <input type="text" placeholder="Enter a search term" name='photoQuery' />
          <button>get photos</button>
        </form>


        {this.state.photoQueryResult.map(photo=>{
          return(
            <Photo photoItem = {photo}
            />
          )
        })}

      </div>


    )
  }
}

export default App
