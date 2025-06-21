// import { useState } from 'react'
import Navbar from './components/Navbar'

import './App.css'

function App() {


  return (
    <>
      <div className="App">
        <header className="App-header">
           <Navbar />
          <contanier className="App-image">
            <h1>Photo presentation?</h1>
            <p>This is a simple React application.</p>
          </contanier>
          <container className="App-content">
            <p>Welcome to the React app!</p>
            <p>This is a simple example of a React application with a navbar.</p>
            <p>You can add more components and styles as needed.</p>
          </container>
        </header>
      </div>
    </>
  )
}

export default App
