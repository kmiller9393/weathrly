import React from 'react';
import Image from './images/cloud-2.svg';

let day = new Date();
let dayNames = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");

export default function CurrentWeather(props) {
      return(
      <div className="current-weather-component app-component">
        <h1 className="current-weather-city">
            <img alt="weather logo" className="weather-icon" src={ Image } />
            { props.currentInformation.location }
        </h1>
        
        <h2 className="current-weather-condition">{ props.currentInformation.conditions }</h2>
          <h2 className="current-weather-day">{dayNames[day.getDay()]} </h2>
        <h2 className="current-weather-temp">{ props.currentInformation.currentTemp }</h2>
        <p className="current-weather-high">Expected High: { props.currentInformation.currentHigh }</p>
        <p className="current-weather-low">Expected Low: { props.currentInformation.currentLow }</p>
        <p>Summary: { props.currentInformation.overview }</p>
      </div>
    )
  }