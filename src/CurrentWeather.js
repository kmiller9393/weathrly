import React, { Component } from 'react';
import App from './App';
import { city } from './cleaners.js';

export default class CurrentWeather extends Component {
  constructor() {
    super();
    this.state = {
      city: city()
    }
  }

  render() {
    return(
      <div>
        <h1>{ this.state.city }</h1>
        <h2>Current Condition: </h2>
        <h2>Current Day Here </h2>
        <h2>Current Temperature Here</h2>
        <p>Expected High: </p>
        <p>Expected Low: </p>
        <p>Summary: "Windy, chance of late thunderstorms"</p>
      </div>
    )
  }
}
