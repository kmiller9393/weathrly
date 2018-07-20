import React, { Component } from 'react';
import logo from './logo.svg';
import CurrentWeather from './CurrentWeather.js';
import Search from './Search.js';
import Card from './Card.js';
import { state } from './cleaners.js';
import { city } from './cleaners.js';
import KEY from './apikeys.js';
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

  getWeather() {
    fetch(`http://api.wunderground.com/api/${KEY}/conditions/q/${state}/${city}.json`)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch (err => alert('SOMETHING BROKE'))
  }

  componentDidMount() {
    this.getWeather();
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