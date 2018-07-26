import React from 'react';
import { shallow, mount } from 'enzyme';

import Card from '../Card';

describe('CARD', () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(<Card />)
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  })

  it('should render', () => {
    expect(wrapper.find('div').length).toEqual(1)
  })

  it('should have props passed in', () => {
    wrapper = mount(<Card data={10} />)
    expect(wrapper.props().data).toEqual(10);
  })
  
  it.skip('should', () => {
    
  })

  it.skip('should', () => {

  })
})