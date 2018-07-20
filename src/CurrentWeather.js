import React, { Component } from 'react';
import App from './App';
import { city } from './cleaners.js';
import Image from './images/cloud-2.svg';
import { state } from './cleaners.js';
import { temp } from './cleaners.js';
import { condition } from './cleaners.js';


export default function CurrentWeather(props) {
      return(
      <div className="current-weather-component app-component">
        <h1 className="current-weather-city">
          <img className="weather-icon" src={Image} />
          { props.city }
        </h1>
        
        <h2 className="current-weather-condition">{ props.condition }</h2>
        <h2 className="current-weather-day">Current Day Here </h2>
        <h2 className="current-weather-temp">{ props.temp }º F</h2>
        <p className="current-weather-high">Expected High: { props.high }</p>
        <p className="current-weather-low">Expected Low: { props.low }</p>
        {/* <p>Summary: {}</p> */}
      </div>
    )
  }