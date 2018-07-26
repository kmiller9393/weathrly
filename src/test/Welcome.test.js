import React from 'react';
import { shallow, mount } from 'enzyme';
import Welcome from '../Welcome';

describe('WELCOME', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Welcome />);
  })

  it ('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it ('should return a header', () => {
    expect(wrapper.find('header').length).toEqual(1)
  })
})