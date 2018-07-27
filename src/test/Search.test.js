import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import Search from '../Search';

describe('Search component', () => {
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

  it('should call the filterLocation method on click', () =>{
    let fakeFunc = jest.fn();
    wrapper = shallow(<Search filterLocation={ fakeFunc } />)

    let submitButton = wrapper.find('button');

    submitButton.simulate('click');

    expect(fakeFunc).toHaveBeenCalled();
    expect(fakeFunc).toHaveBeenCalledTimes(1);
  });
});