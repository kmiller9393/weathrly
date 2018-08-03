import React, { Component } from 'react';
import cityData from './cityData.js';
import Trie from '@kmiller9393/complete-me';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: this.props.location
    };
    this.getSuggestions = [];
    this.trie = new Trie();
    this.trie.populate(cityData.cities);
  }

  filterSuggestions = () => {
    if (!this.state.userInput) {
      this.getSuggestions = [];
    } else {
      this.getSuggestions = this.trie
        .suggest(this.state.userInput)
        .splice(0, 5);
    }
  };

  changeLocation = e => {
    this.setState({ userInput: e.target.value }, () =>
      this.filterSuggestions()
    );
  };

  render() {
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
        }}
        className={
          this.props.location
            ? 'App-intro app-component search-component'
            : 'welcome-search'
        }
      >
        <input
          list="city-list"
          type="text"
          value={this.state.userInput}
          onChange={e => {
            this.changeLocation(e);
          }}
          placeholder={
            localStorage.getItem('inputLocation')
              ? 'Search for a location'
              : 'Search for a location and press Enter to submit'
          }
          className="location-search-input"
        />
        <datalist id="city-list">
          {this.getSuggestions.map(suggestion => (
            <option> {suggestion} </option>
          ))}
        </datalist>
        <button
          className="location-search-button"
          onClick={() => {
            this.props.filterLocation(this.state.userInput);
          }}
        >
          Submit
        </button>
      </form>
    );
  }
}
