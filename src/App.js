import React, { Component } from 'react';
import logo from './logo.svg';
import CurrentWeather from './CurrentWeather.js';
import SevenHour from './SevenHour.js';
import Search from './Search.js';
import Card from './Card.js';
import Welcome from './Welcome.js';
import { currentWeather } from './cleaners.js';
import KEY from './apikeys.js';
import './App.css';
import TenDay from './TenDay';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentWeather: {},
      sevenHours: [],
      tenDays: [],
      location: '',
      lookup: false
    }
    this.filterLocation = this.filterLocation.bind(this);
  }

  componentDidMount = () => {
    fetch(`http://api.wunderground.com/api/${KEY}/conditions/hourly/forecast10day/q/${this.state.location}.json`)
    .then(response => response.json())
    .then(data => {
      let weatherData = currentWeather(data)
      this.setState({
        currentWeather: weatherData.currDayObj,
        sevenHours: weatherData.sevenHours,
        tenDays: weatherData.tenDays
      })
    })
  }  

  filterLocation(search) {
    this.setState({
      location: search.userInput,
      lookup: true
    }); 
    setTimeout(() => {
      this.componentDidMount() 
    }, 1);
  }

  render() {
    return (
      <div className="App">
        <Welcome />
        <section className="main-section">
          <Search 
          location={this.state.location}
          filterLocation={this.filterLocation}
          />
          { this.state.lookup && <CurrentWeather 
          currentInformation={this.state.currentWeather}
          /> }
          { this.state.lookup && <SevenHour 
          sevenHours={this.state.sevenHours}
          /> }
          {/* <Card /> */}
          {this.state.lookup && <TenDay /> }
        </section>
      </div>
    );
  }
}

export default App;