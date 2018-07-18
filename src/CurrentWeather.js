import React, { Component } from 'react';
import App from './App';

class CurrentWeather extends Component {
  constructor() {
    super();
    this.state = {
      location: ''
    }
  }

  render() {
    return(
      <div>
        <h1>City: </h1>
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


export default CurrentWeather;