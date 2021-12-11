import React from 'react'
import logo from './logo.svg'
import './App.css'

import { withAuthenticator } from '@aws-amplify/ui-react'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello World!</h1>
        <h2>Project 6</h2>
        <h3>Advanced Cloud Fall 2021</h3>
        <h3>Melissa McGuire</h3>
      </header>
    </div>
  );
}

export default withAuthenticator(App, { includeGreetings: true })

