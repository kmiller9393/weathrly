import React from 'react';
import { shallow, mount } from 'enzyme';
import Welcome from '../Welcome';

describe('Welcome component', () => {
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