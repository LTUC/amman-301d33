import React from 'react';
import Board from './components/Board'


class App extends React.Component {
  render() {
    return (
      <>
        <h1>Cats Information</h1>
        <p>this is the home page</p>
        <Board />
      </>
    )
  }
}

export default App;