import React from 'react';

export default function CurrentWeather(props) {
  const {
    icon,
    location,
    currentDay,
    conditions,
    overview,
    currentTemp,
    currentHigh,
    currentLow
  } = props.currentInformation;

  return (
    <div className="current-weather-component app-component">
      <h1 className="current-weather-city">
        <img alt="weather logo" className="weather-icon" src={icon} />
        {location}
      </h1>
      <h2 className="current-weather-day">{currentDay} </h2>
      <h2 className="current-weather-condition">{conditions}</h2>
      <p>{overview}</p>
      <h2 className="current-weather-temp">{currentTemp}</h2>
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
