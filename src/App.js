import React, { Component } from 'react';
import logo from './logo.svg';
import Contact from './Contact';
import './App.css';
import Gallery from './Gallery';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <Gallery/>
        </header>
        <p className="App-intro">
          <Contact/>
        </p>
      </div>
    );
  }
}

export default App;
