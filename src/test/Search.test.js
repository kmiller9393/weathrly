import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

import Search from '../Search';

describe('SEARCH', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Search />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render without crashing', () => {
    const parentElem = document.createElement('form');
    ReactDOM.render(<Search />, parentElem);
  });

  it('should have props passed in', () => {
    wrapper = mount(<Search location={'Denver, CO'} />);
    expect(wrapper.props().location).toEqual('Denver, CO');
  });

  it('should have a nested input and button', () => {
    wrapper = mount(<Search />);
    let input = wrapper.find('input')
    let button = wrapper.find('button')
    
    expect(input).toBeDefined();
    expect(button).toBeDefined();
  });

  it('should have a default state', () => {
    wrapper = mount(<Search location={'Denver, CO'} />);

    expect(wrapper.state()).toEqual({
      userInput: 'Denver, CO'
    })
  })

  it('should update state', () => {
    wrapper = mount(<Search location={'Denver, CO'} />);

    expect(wrapper.state()).toEqual({
      userInput: 'Denver, CO'
    })

    wrapper = mount(<Search location={'Golden, CO'} />);

    expect(wrapper.state()).toEqual({
      userInput: 'Golden, CO'
    })
  })

});