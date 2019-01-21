import React, { Component } from 'react';
import CurrentWeather from './CurrentWeather.js';
import SevenHour from './SevenHour.js';
import Search from './Search.js';
import Welcome from './Welcome.js';
import { currentWeather } from './cleaners.js';
import './App.css';
import TenDay from './TenDay.js';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      currentWeather: {},
      sevenHours: [],
      tenDays: [],
      location: '',
      lookup: false
    };
  }

  getWeather = location => {
    fetch(`https://cors-anywhere.herokuapp.com/http://api.wunderground.com/api/${
      process.env.REACT_APP_API_KEY
    }/conditions/hourly/forecast10day/q/
      ${this.state.location}.json`)
      .then(response => response.json())
      .then(data => {
        let weatherData = currentWeather(data);
        this.setState({
          currentWeather: weatherData.currDayObj,
          sevenHours: weatherData.sevenHours,
          tenDays: weatherData.tenDays
        });
      })
      .catch(err => {
        localStorage.clear();
        window.location.reload();
        alert('Please enter a valid location.');
      });
  };

  componentDidMount = async () => {
    if (localStorage.length) {
      let savedLocation = localStorage.getItem('inputLocation');

      this.filterLocation(savedLocation);
    }
  };

  filterLocation = location => {
    this.setState(
      {
        location: location,
        lookup: true
      },
      () => this.getWeather()
    );
    localStorage.setItem('inputLocation', location);
  };

  render() {
    const {
      lookup,
      location,
      currentWeather,
      sevenHours,
      tenDays
    } = this.state;
    return (
      <div className="App">
        {!lookup && <Welcome />}
        <section className="main-section">
          <Search location={location} filterLocation={this.filterLocation} />
          {lookup && <CurrentWeather currentInformation={currentWeather} />}
          {lookup && <SevenHour sevenHours={sevenHours} />}
          {lookup && <TenDay tenDays={tenDays} />}
        </section>
      </div>
    );
  }
}
