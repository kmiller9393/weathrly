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
      <form className="App-intro app-component">
        <input type="text" placeholder="Search for a location" className="location-search-input" />
        <button className="location-search-button" onClick={this.addLocation}>Submit</button>
      </form>
    )
  }
}