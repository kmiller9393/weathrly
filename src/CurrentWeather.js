import React, { Component } from 'react';
import App from './App';
import Image from './images/cloud-2.svg';



export default function CurrentWeather(props) {
      return(
      <div className="current-weather-component app-component">
        <h1 className="current-weather-city">
          <img className="weather-icon" src={ Image } />
            { props.currentInformation.location }
        </h1>
        
        <h2 className="current-weather-condition">{ props.currentInformation.conditions }</h2>
        <h2 className="current-weather-day">{props.currentInformation.time} </h2>
        <h2 className="current-weather-temp">{ props.currentInformation.current }</h2>
        <p className="current-weather-high">Expected High: { props.currentInformation.high }</p>
        <p className="current-weather-low">Expected Low: { props.currentInformation.low }</p>
        {/* <p>Summary: {}</p> */}
      </div>
    )
  }