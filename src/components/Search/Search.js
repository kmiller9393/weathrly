import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import cityData from '../../utils/cityData';
import Trie from '@kmiller9393/complete-me';
import searchIcon from '../../images/magnifying-glass-icon.svg';
import './Search.css';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      userInput: '',
      homeView: false
    };
    this.getSuggestions = [];
    this.trie = new Trie();
    this.trie.populate(cityData.cities);
  }

  componentDidMount() {
    const { pathname } = this.props.location;

    if (pathname === '/') {
      this.setState({ homeView: true });
      localStorage.clear();
    } else if (pathname !== '/forecast') {
      this.setState({ homeView: false });
    }
  }

  filterSuggestions = () => {
    const { userInput } = this.state;

    if (!userInput) {
      this.getSuggestions = [];
    } else {
      this.getSuggestions = this.trie.suggest(userInput).splice(0, 5);
    }
  };

  changeLocation = e => {
    this.setState({ userInput: e.target.value }, () =>
      this.filterSuggestions()
    );
  };

  render() {
    const { filterLocation } = this.props;
    const { userInput, homeView } = this.state;

    return (
      <form
        onSubmit={e => {
          e.preventDefault();
        }}
        className={homeView ? 'home-form' : 'weather-form'}
      >
        <button
          className={homeView ? 'home-search-button' : 'weather-search-button'}
          onClick={() => {
            filterLocation(userInput);
          }}
        >
          <img src={searchIcon} alt="search button" />
        </button>
        <input
          list="city-list"
          type="text"
          value={userInput}
          onChange={e => {
            this.changeLocation(e);
          }}
          placeholder={
            localStorage.getItem('inputLocation')
              ? 'Search for a location'
              : 'Search for a location'
          }
          className={homeView ? 'home-search-input' : 'weather-search-input'}
        />
        <datalist id="city-list">
          {this.getSuggestions.map((suggestion, index) => (
            <option key={index}> {suggestion} </option>
          ))}
        </datalist>
      </form>
    );
  }
}

export default withRouter(Search);
