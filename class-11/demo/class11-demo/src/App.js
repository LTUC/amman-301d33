import React from 'react'
import LoginButton from './components/LoginButton'
import LogoutButton from './components/LogoutButton'
import Profile from './components/Profile'

export class App extends React.Component {
  render() {
    return (
      <div>
        <LoginButton/>
        <LogoutButton/>
        <Profile/>
      </div>
    )
  }
}

export default App
