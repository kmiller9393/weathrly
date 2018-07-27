import React from 'react';
import { shallow, mount } from 'enzyme';
import CurrentWeather from '../CurrentWeather';
import data from '../WeatherData';
import { currentWeather } from '../cleaners.js';

describe('CurrentWeather component', () => {
  let wrapper;
  let mockWeather = currentWeather(data);

  beforeEach(() => {
    wrapper = mount(<CurrentWeather currentInformation={mockWeather} />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should return elements', () => {
    expect(wrapper.find('div').length).toEqual(1);
    expect(wrapper.find('h1').length).toEqual(1);
    expect(wrapper.find('img').length).toEqual(1);
    expect(wrapper.find('h2').length).toEqual(3);
    expect(wrapper.find('p').length).toEqual(3);
    expect(wrapper.find('article').length).toEqual(1);
  });

  it('should have a currentInformation property', () => {
    expect(wrapper.props().currentInformation).toBeDefined();
  });

  it('should have properties for the current forecast', () => {
    expect(wrapper.props().currentInformation.currDayObj.location).toEqual('Louisville, KY');
    expect(wrapper.props().currentInformation.currDayObj.currentTemp).toEqual('46°F');
    expect(wrapper.props().currentInformation.currDayObj.currentHigh).toEqual('51° F');
    expect(wrapper.props().currentInformation.currDayObj.currentLow).toEqual('32° F');
    expect(wrapper.props().currentInformation.currDayObj.conditions).toEqual('Partly Cloudy');
    expect(wrapper.props().currentInformation.currDayObj.icon).toEqual('http://icons.wxug.com/i/c/k/partlycloudy.gif');
    expect(wrapper.props().currentInformation.currDayObj.overview).toEqual('Sun and clouds mixed. High 51F. Winds NE at 10 to 15 mph.');
  });
});