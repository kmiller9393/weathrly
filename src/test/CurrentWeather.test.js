import React from 'react';
import { shallow, mount } from 'enzyme';
import CurrentWeather from '../CurrentWeather';
import data from '../WeatherData';
import { currentWeather } from '../cleaners.js';

describe.only('CurrentWeather component', () => {
  let wrapper;
  let mockWeather = currentWeather(data);

  beforeEach(() => {
    wrapper = mount(<CurrentWeather currentInformation={mockWeather} />);
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should have and return properties')
  // expect(wrapper.props().currentInformation.icon).toBeDefined();
  // expect(wrapper.props().response).toBeDefined();
  // it('should have a default state of an object', () => {
  //   expect(wrapper.state()).
  // });


})