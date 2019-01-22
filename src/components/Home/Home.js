import React, { Component } from 'react';
import Search from '../Search/Search';
import './Home.css';

export default class Home extends Component {
  render() {
    const { location, filterLocation } = this.props;

    return (
      <div className="home-container">
        <h1 className="home-title">Weathrly</h1>
        <Search location={location} filterLocation={filterLocation} />
      </div>
    );
  }
}
