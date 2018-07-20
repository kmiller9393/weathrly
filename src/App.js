import React, { Component } from 'react';
import logo from './logo.svg';
import CurrentWeather from './CurrentWeather.js';
import Search from './Search.js';
import Card from './Card.js';
import { city } from './cleaners.js';
import KEY from './apikeys.js';
import './App.css';


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
    fetch(`http://api.wunderground.com/api/${KEY}/conditions/q/co/Denver.json`)
    .then(response => response.json())
    .then(data => console.log(data));
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
          {/* <Card /> */}
          <article className="app-component"></article>
        </section>
      </div>
    );
  }
}

export default App;