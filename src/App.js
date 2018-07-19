import React, { Component } from 'react';
import logo from './logo.svg';
import CurrentWeather from './CurrentWeather.js';
import Search from './Search.js';
import Card from './Card.js';
import { city } from './cleaners.js';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      // country: '',
      // temperature: '',
      // humidity: '',
      // description: ''
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Welcome to Weathrly</h1>
        </header>
        <section className="main-section">
          <Search />
          <CurrentWeather />
          {/* <Card /> */}
          <article className="app-component"></article>
        </section>
      </div>
    );
  }
}

export default App;