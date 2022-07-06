import React, {useEffect, useState} from 'react'
import logo from './logo.svg'
import './App.css'

import json from 'assets/pets-data.json'

const App = () => {
    const [pets, setPets] = useState()
    console.log(pets)
    useEffect(() => {
      fetch(json).then(resp => resp.json()).then(setPets.bind(this))
    }, [])
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    )
}

export default App
