import React from 'react';
import { shallow, mount } from 'enzyme';

import CurrentWeather from '../CurrentWeather';

describe('CURRENTWEATHER', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CurrentWeather />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  // it('should have a default state of an object', () => {
  //   expect(wrapper.state()).
  // });


})