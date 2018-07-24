import React, { Component } from 'react';
import cityData from './cityData.js';
const Trie = require('@kmiller9393/complete-me');


export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: this.props.location,
      getSuggestions: []
    }
    this.trie = new Trie();
    this.trie.populate(cityData.cities);
    console.log(this.trie)
  }

  filterSuggestions() {
    if (this.state.userInput) {
      this.setState({ getSuggestions: this.trie.suggest(this.state.userInput) })
    } else {
      this.setState({ getSuggestions: [] })
    }
    console.log(this.state.getSuggestions);
  }

  render() {
    return (
      <form className="App-intro app-component search-component">
        <input 
          type="text" 
          value={this.state.userInput}
          onChange={(e) => {
            this.setState({
              userInput: e.target.value,
            })
            this.filterSuggestions(e)
          }}
          placeholder="Search for a location" 
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
    