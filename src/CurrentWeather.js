import React from 'react';

export default function CurrentWeather(props) {
      console.log(props)
      return(
      <div className="current-weather-component app-component">
        <h1 className="current-weather-city">
            <img alt="weather logo" className="weather-icon" src={ props.currentInformation.icon } />
            { props.currentInformation.location }
        </h1>
        <h2 className="current-weather-day">{ props.currentInformation.currentDay } </h2>
        <h2 className="current-weather-condition">{ props.currentInformation.conditions }</h2>
        <p>{props.currentInformation.overview}</p>
        <h2 className="current-weather-temp">{ props.currentInformation.currentTemp }</h2>
        <article className="expected-temps">
          <p className="current-weather-high">High:<strong>{ props.currentInformation.currentHigh }</strong></p>
          <p className="current-weather-low">Low:<strong>{ props.currentInformation.currentLow }</strong></p>
        </article>
      </div>
    )
  }