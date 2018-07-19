import React, { Component } from 'react';
import App from './App';
import { city } from './cleaners.js';
import Image from './images/cloud-2.svg';
import { state } from './cleaners.js';
import { temp } from './cleaners.js';
import { condition } from './cleaners.js';

export default class CurrentWeather extends Component {
  constructor() {
    super();
    this.state = {
      city: city(),
      state: state(),
      condition: condition(),
      temp: temp(),
      expectedHigh: undefined,
      expectedLow: undefined
    }
  }

  render() {
    return(
      <div className="current-weather-component app-component">
        <h1 className="current-weather-city">
          <img className="weather-icon" src={Image} />
          { this.state.city }
        </h1>
        <h3 className="current-weather-state">{ this.state.state }</h3>
        <h2 className="current-weather-condition">{ this.state.condition }</h2>
        <h2 className="current-weather-day">Current Day Here </h2>
        <h2 className="current-weather-temp">{ this.state.temp }º F</h2>
        <p className="current-weather-high">Expected High: { this.state.expectedHigh }</p>
        <p className="current-weather-low">Expected Low: { this.state.expectedLow }</p>
        {/* <p>Summary: {}</p> */}
      </div>
    )
  }
}
