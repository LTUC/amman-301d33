import axios from 'axios';
import React from 'react';
import './App.css';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      photoResultInfo: []
    }
  }
  getPhotos = async (e) => {
    e.preventDefault();
    await this.setState({
      searchQuery: e.target.photoQuery.value
    })
    console.log(this.state.searchQuery)
    let photoResult = await axios.get(`${process.env.REACT_APP_SERVER_LINK}/photos?searchQuery=${this.state.searchQuery}`);
    await this.setState({
      photoResultInfo: photoResult.data
    })

    console.log(this.state.photoResultInfo)
  }

  render() {
    return (
      <>
        <form className="myForm" onSubmit={this.getPhotos}>
          <input type='text' name='photoQuery' />
          <input type="submit" value="Search" />
        </form>
        {/* {this.state.photoResultInfo.length &&
          <>
            <img src={this.state.photoResultInfo[0].imageUrl} alt='' width={150} />
            <p>{this.state.photoResultInfo[0].likes}</p>
          </>
        } */}
        {
          this.state.photoResultInfo.length && this.state.photoResultInfo.map(function (value, index) {
            return (
              <div className='image' key={index}>
                < img src={value.imageUrl} alt='' width={350} />
                <p>number of likes {value.likes}</p>
              </div>
            )
          })
        }
      </>
    )
  }
}
export default App
