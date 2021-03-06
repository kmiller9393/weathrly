import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Home from '../Home/Home';
import Forecast from '../Forecast/Forecast';
import { currentWeather } from '../../utils/cleaners.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentWeather: {},
      sevenHours: [],
      tenDays: [],
      location: ''
    };
  }

  getWeather = location => {
    fetch(`https://cors-anywhere.herokuapp.com/http://api.wunderground.com/api/${
      process.env.REACT_APP_API_KEY
    }/conditions/hourly/forecast10day/q/
      ${location}.json`)
      .then(response => response.json())
      .then(data => {
        let weatherData = currentWeather(data);
        this.setState({
          currentWeather: weatherData.currDayObj,
          sevenHours: weatherData.sevenHours,
          tenDays: weatherData.tenDays
        });
        this.props.history.push('/forecast');
      })
      .catch(err => {
        localStorage.clear();
        alert('Please enter a valid location.');
      });
  };

  componentDidMount = () => {
    if (localStorage.length) {
      let savedLocation = localStorage.getItem('inputLocation');

      this.filterLocation(savedLocation);
    }
  };

  filterLocation = location => {
    this.setState(
      {
        location
      },
      () => this.getWeather(this.state.location)
    );
    localStorage.setItem('inputLocation', location);
  };

  render() {
    const { location, currentWeather, sevenHours, tenDays } = this.state;
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Home filterLocation={this.filterLocation} location={location} />
            )}
          />
          <Route
            path="/forecast"
            render={() => (
              <Forecast
                currentWeather={currentWeather}
                filterLocation={this.filterLocation}
                location={location}
                sevenHours={sevenHours}
                tenDays={tenDays}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
