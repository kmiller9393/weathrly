import React, { Component } from 'react';
import Search from '../Search/Search';
import CurrentWeather from '../CurrentWeather/CurrentWeather.js';
import SevenHour from '../SevenHour/SevenHour.js';
import TenDay from '../TenDay/TenDay.js';
import './Forecast.css';

export default class Forecast extends Component {
  render() {
    const {
      currentWeather,
      sevenHours,
      tenDays,
      location,
      filterLocation
    } = this.props;

    return (
      <div className="forecast-container">
        <header className="forecast-header-container">
          <h1 className="forecast-page-header">Weathrly</h1>
          <Search location={location} filterLocation={filterLocation} />
        </header>
        <main className="main-forecast-container">
          <SevenHour sevenHours={sevenHours} />
          <CurrentWeather currentInformation={currentWeather} />
        </main>
        <footer className="forecast-footer">
          <TenDay tenDays={tenDays} />
        </footer>
      </div>
    );
  }
}
