import React, { Component } from 'react';
import logo from './logo.svg';
import CurrentWeather from './CurrentWeather.js';
import SevenHour from './SevenHour.js';
import Search from './Search.js';
import Card from './Card.js';
import { state } from './cleaners.js';
import { city } from './cleaners.js';
import KEY from './apikeys.js';
import './App.css';
import TenDay from './TenDay';


class App extends Component {
  constructor() {
    super();
    this.state = {
      city: 'Denver',
      condition: 'sunny',
      day: 'Thursday',
      temp: 100,
      high: 101,
      low: 72
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
          <CurrentWeather 
            city={this.state.city}
            condition={this.state.condition}
            day={this.state.day}
            temp={this.state.temp}
            high={this.state.high}
            low={this.state.low}
          />

          <SevenHour />
          {/* <Card /> */}
          <TenDay />
        </section>
      </div>
    );
  }
}

export default App;