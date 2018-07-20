import React, { Component } from 'react';
import App from './App';


export default class Search extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <p className="App-intro app-component" placeholder="Search for a location">
          <input type="text" className="location-search-input" />
        <button className="location-search-button" onClick={this.addLocation}>Submit</button>
      </p>
    )
  }
}