import React, { Component } from 'react';
import logo from './logo.svg';
import CurrentWeather from './CurrentWeather.js';
import SevenHour from './SevenHour.js';
import Search from './Search.js';
import Card from './Card.js';
import { currentWeather } from './cleaners.js';
import KEY from './apikeys.js';
import './App.css';
import TenDay from './TenDay';

class App extends Component {
  constructor() {
    super();
    this.state = {
      current: {},
      location: 'Denver, CO',
      currentDay: 'Thursday',
      currentTemp: null,
      currenthigh: null,
      currentlow: null,
      lookup: false
    }
    this.filterLocation = this.filterLocation.bind(this);
  }

  componentDidMount = () => {
    fetch(`http://api.wunderground.com/api/${KEY}/conditions/hourly/forecast10day/q/${this.state.location}.json`)
    .then(response => response.json())
    .then(response => this.setState({
      current: currentWeather(response)
    })
  )}

  filterLocation(search) {
    this.setState({
      location: search.userInput,
      lookup: true
    }); 
    setTimeout(() => {
      this.componentDidMount() 
    }, 1);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img alt="weather logo" src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Welcome to Weathrly</h1>
        </header>
        <section className="main-section">
          <Search 
          location={this.state.location}
          filterLocation={this.filterLocation}
          />
          { this.state.lookup && <CurrentWeather 
          currentInformation={this.state.current}
          /> }

          { this.state.lookup && <SevenHour /> }
          {/* <Card /> */}
          {this.state.lookup && <TenDay /> }
        </section>
      </div>
    );
  }
}

export default App;