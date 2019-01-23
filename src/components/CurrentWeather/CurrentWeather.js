import React, { Component } from 'react';
import { getCurrentIcon } from '../../utils/getCurrentIcon';
import './CurrentWeather.css';

export default class CurrentWeather extends Component {
  getIcon = icon => {
    if (icon) {
      const weatherIcon = getCurrentIcon(icon);

      return weatherIcon;
    }
  };

  render() {
    const {
      icon,
      location,
      currentDay,
      conditions,
      overview,
      currentTemp,
      currentHigh,
      currentLow
    } = this.props.currentInformation;

    return (
      <div className="current-weather-container">
        <h1 className="current-weather-city">
          <img
            alt="weather logo"
            className="weather-icon"
            src={this.getIcon(icon)}
          />
          {location}
        </h1>
        <div className="day-conditions-container">
          <h2 className="current-weather-day">{currentDay} </h2>
          <h2 className="current-weather-condition">{conditions}</h2>
          <p>{overview}</p>
          <h2 className="current-weather-temp">{currentTemp}</h2>
        </div>
        <article className="expected-temps">
          <p className="current-weather-high">
            High:<strong>{currentHigh}</strong>
          </p>
          <p className="current-weather-low">
            Low:<strong>{currentLow}</strong>
          </p>
        </article>
      </div>
    );
  }
}
