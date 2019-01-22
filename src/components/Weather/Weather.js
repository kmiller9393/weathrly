import React, { Component } from 'react';
import Search from '../Search/Search';
import CurrentWeather from '../CurrentWeather/CurrentWeather.js';
import SevenHour from '../SevenHour/SevenHour.js';
import TenDay from '../TenDay/TenDay.js';
import './Weather.css';

export default class Weather extends Component {
  render() {
    const {
      currentWeather,
      sevenHours,
      tenDays,
      location,
      filterLocation
    } = this.props;

    return (
      <div className="weather-container">
        <header className="weather-header-container">
          <h1 className="weather-page-header">Weathrly Forecast</h1>
          <Search location={location} filterLocation={filterLocation} />
        </header>
        <main className="main-weather-container">
          <SevenHour sevenHours={sevenHours} />
          <CurrentWeather currentInformation={currentWeather} />
        </main>
        <footer className="weather-footer">
          <TenDay tenDays={tenDays} />
        </footer>
      </div>
    );
  }
}
