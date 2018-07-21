import React, { Component } from 'react';

export default class Search extends Component {
  constructor(props) {
    super();
    this.state = {
      userInput: props.location
    }
  }

  render() {
    return (
      <form className="App-intro app-component search-component">
        <input 
          type="text" 
          value={this.state.userInput}
          onChange={(e) => {
            this.setState({
              userInput: e.target.value
            })
          }}
          placeholder="Search for a location" 
          className="location-search-input" 
          />
        <button className="location-search-button" onClick={(e) => {
          e.preventDefault();
          this.props.filterLocation(this.state);
        }}>Submit</button>
      </form>
    )
  }
}
    