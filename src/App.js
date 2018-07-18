import React, { Component } from 'react';
import logo from './logo.svg';
import CurrentWeather from './CurrentWeather.js';
import { city } from './cleaners.js';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      city: city(),
      country: '',
      temperature: '',
      humidity: '',
      description: ''
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Weathrly</h1>
        </header>
        <p className="App-intro">
          To get started, add your location here:
          <input type="text" />
          <button onClick={this.addLocation}>Submit</button>
          <CurrentWeather />
        </p>
      </div>
    );
  }
}

export default App;