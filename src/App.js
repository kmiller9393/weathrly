import React, { Component } from 'react';
import logo from './logo.svg';
import CurrentWeather from './CurrentWeather.js';
import SevenHour from './SevenHour.js';
import Search from './Search.js';
import Card from './Card.js';
import { currWeather } from './cleaners.js';
import KEY from './apikeys.js';
import './App.css';
import TenDay from './TenDay';


class App extends Component {
  constructor() {
    super();
    this.state = {
      city: 'Denver, CO',
      current: {},
      day: 'Thursday',
      temp: 100,
      high: 101,
      low: 72
    }
  }

  componentDidMount = () => {
    fetch(`http://api.wunderground.com/api/${KEY}/geolookup/conditions/hourly/forecast10day/q/${this.state.city}.json`)
    .then(response => response.json())
    .then(response => this.setState({
      current: currWeather(response)
    })
  )}

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
          currentInformation={this.state.current}
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