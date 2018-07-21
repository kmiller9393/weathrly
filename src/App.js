import React, { Component } from 'react';
import logo from './logo.svg';
import CurrentWeather from './CurrentWeather.js';
import Search from './Search.js';
import Card from './Card.js';
import { currentWeather } from './cleaners.js';
import KEY from './apikeys.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      current: {},
      location: 'Denver, CO',
      currentDay: 'Thursday',
      currentTemp: null,
      currenthigh: null,
      currentlow: null
    }
    this.filterLocation = this.filterLocation.bind(this);
  }

  componentDidMount = () => {
    fetch(`http://api.wunderground.com/api/${KEY}/geolookup/conditions/hourly/forecast10day/q/${this.state.location}.json`)
    .then(response => response.json())
    .then(response => this.setState({
      current: currentWeather(response)
    })
  )}

  filterLocation(search) {
    this.setState({
      location: search.userInput
    });  
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Welcome to Weathrly</h1>
        </header>
        <section className="main-section">
          <Search 
          filterLocation={this.filterLocation}
          location={this.state.location}
          />
          <CurrentWeather 
          currentInformation={this.state.current}
          />
          {/* <Card /> */}
          <article className="app-component"></article>
        </section>
      </div>
    );
  }
}

export default App;