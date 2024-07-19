import React, { Component } from 'react';
import './App.css';
import Todo from './Todo'; // Ensure the path to your Todo component is correct

class App extends Component {
  render() {
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
        <Todo /> {/* Add your Todo component here */}
      </div>
    );
  }
}

export default App;
