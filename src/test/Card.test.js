import React from 'react';
import { shallow, mount } from 'enzyme';
import Card from '../Card';

describe('Card component', () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(<Card />)
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  });

  it('should return elements', () => {
    expect(wrapper.find('div').length).toEqual(1);
    expect(wrapper.find('p').length).toEqual(6);
    expect(wrapper.find('img').length).toEqual(1);
    expect(wrapper.find('article').length).toEqual(1);
  });

  it('should have props passed in', () => {
    wrapper = mount(<Card data={10} />)
    expect(wrapper.props().data).toEqual(10);
  });
});

