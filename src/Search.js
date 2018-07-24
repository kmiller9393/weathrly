import React, { Component } from 'react';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: this.props.location,
      location: false
    }
  }

  render() {
    return (
      <form
        className={localStorage.getItem('inputLocation') ? "App-intro app-component search-component" : "welcome-search"}
      >
        <input 
          type="text" 
          value={this.state.userInput}
          onChange={(e) => {
            this.setState({
              userInput: e.target.value
            })
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
    