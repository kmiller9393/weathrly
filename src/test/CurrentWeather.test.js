import React from 'react';
import { shallow, mount } from 'enzyme';
import CurrentWeather from '../CurrentWeather';

describe.only('CurrentWeather component', () => {
  let wrapper;
  const currenWeather = {
    conditions: "Chance of a Thunderstorm",
    currentDay: "Thursday",
    currentHigh: "82° F",
    currentLow: "60° F",
    currentTemp: "64.6°F",
    icon: "http://icons.wxug.com/i/c/k/chancetstorms.gif",
    location: "Denver, CO",
    overview: "Partly cloudy with afternoon showers or thunderstorms."
  }


  beforeEach(() => {
    wrapper = shallow(<CurrentWeather />);
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  // it('should have a default state of an object', () => {
  //   expect(wrapper.state()).
  // });


})