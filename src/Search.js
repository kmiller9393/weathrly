import React, { Component } from 'react';
import cityData from './cityData.js';
// const Trie = require('@kmiller9393/complete-me');

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: this.props.location,
    }
    this.getSuggestions = [];
    // this.trie = new Trie();
    // this.trie.populate(cityData.cities);
  }

  // filterSuggestions = () => {
  //   console.log(this.state.userInput)
  //   if (!this.state.userInput) {
  //     this.getSuggestions = [];
  //   } else {
  //     this.getSuggestions = this.trie.suggest(this.state.userInput);
  //   }
  //   console.log(this.getSuggestions);
  // }

  changeLocation = (e) => {
    this.setState({userInput: e.target.value}
      // () => this.filterSuggestions()
    )
  }

  render() {
    return (
      <form
        className={localStorage.length ? "App-intro app-component search-component" : "welcome-search"}
      >
        <input 
          type="text" 
          value={this.state.userInput}
          onChange={(e) => {
            this.changeLocation(e);
          }}
          placeholder={localStorage.getItem('inputLocation') ? "Search for a location" : "Search for a location and press Enter to submit"} 
          className="location-search-input" 
          />
        <button className="location-search-button" onClick={(e) => {
          e.preventDefault();
          this.props.filterLocation(this.state.userInput);
        }}>Submit</button>
      </form>
    );
  }
}
    