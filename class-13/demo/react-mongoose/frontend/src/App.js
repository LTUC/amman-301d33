import axios from 'axios';
import React from 'react';
import AddCatForm from './components/AddCatForm';
import Cat from './components/Cat';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cats: [],
      showCatsComponent: false,
      ownerNamee:''
    }
  }
  
  getCats = async (e) => {
    e.preventDefault();

    let ownerName = e.target.catOwner.value;
    console.log(ownerName);

    // localhost:3001/getCatsOwner?ownerName=razan
    let catsData = await axios.get(`${process.env.REACT_APP_SERVER}/getCatsOwner?ownerName=${ownerName}`)
    this.setState({
      cats: catsData.data,
      showCatsComponent:true,
      ownerNamee:ownerName
    })
    console.log(this.state.cats)

  }

  addCat= async (e) =>{
    e.preventDefault()
    console.log('addCat func');
    // let ownerName = this.state.ownerNamee;
    // let catName= e.target.catName.value;
    // let catBreed = e.target.catBreed.value;

    // let newCatsData = await axios.get(`${process.env.REACT_APP_SERVER}/addCat?ownerName1=${ownerName}&catName1=${catName}&catBreed1=${catBreed}`)

    let catFormInfo = {
      ownerName1 : this.state.ownerNamee,
      catName1 : e.target.catName.value,
      catBreed1 : e.target.catBreed.value
    }
    let newCatsData = await axios.post(`${process.env.REACT_APP_SERVER}/addCat`,catFormInfo);


    this.setState ({
      cats: newCatsData.data
    })

  }

  deleteCat = async (catID) =>{
    console.log('inside deleteCat');
    console.log(catID)
    // delete the cat by ID
    // send the request to the backend with the ID
    let newCatsData = await axios.delete(`${process.env.REACT_APP_SERVER}/deleteCat?catID=${catID}&ownerName=${this.state.ownerNamee}`)
    
    this.setState ({
      cats: newCatsData.data
    })

  }

  render() {
    return (
      <div>

        <form onSubmit={this.getCats}>
          <label>Enter your name</label>
          <input type="text" name='catOwner' />
          <input type="submit" value="get cats" />
        </form>

        <AddCatForm
          addCatFunc = {this.addCat}
        />

        {/* render the cats data */}
        {this.state.showCatsComponent &&
          this.state.cats.map((cat, idx) => {
            return (
              <Cat
                cat={cat}
                idx={idx}
                deleteCatFunc = {this.deleteCat}
              />
            )
          })
        }

      </div>
    )
  }
}

export default App
