import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import App from '../App.js';

describe('App Component', () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(<App />)
    localStorage.clear();
  });

  it ('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should have a default state', () => {
    expect(wrapper.state()).toEqual({
      currentWeather: {},
      sevenHours: [],
      tenDays: [],
      location: '',
      lookup: false
    })
  });

  it('should render child components on default', () => {
    expect(wrapper.find('Welcome').length).toEqual(1);
    expect(wrapper.find('Search').length).toEqual(1);
  });

  it('should render child components after a location has been entered', () => {
    wrapper.setState({ location: 'anchorage, ak', lookup: true })
    
    expect(wrapper.find('Welcome').length).toEqual(1);
    expect(wrapper.find('CurrentWeather').length).toEqual(1);
    expect(wrapper.find('SevenHour').length).toEqual(1);
    expect(wrapper.find('TenDay').length).toEqual(1);
  });
  
  it('should retrieve data from localStorage on mount', () => {
    const location = 'Denver, CO';
      
    localStorage.setItem('newLocation', (location));
    let savedLocation = localStorage.getItem('newLocation');

    wrapper.setState({
      location: savedLocation
    })

    expect(wrapper.state().location).toEqual('Denver, CO');
  });
});

