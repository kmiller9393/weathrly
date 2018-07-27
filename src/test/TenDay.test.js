import React from 'react';
import { shallow, mount } from 'enzyme';
import data from '../WeatherData';
import { currentWeather } from '../cleaners.js';
import TenDay from '../TenDay';

describe('TenDay component', () => {
  let wrapper;
  let mockWeather = 
  [ { date: 
     { epoch: '1513814400',
       pretty: '7:00 PM EST on December 20, 2017',
       day: 20,
       month: 12,
       year: 2017,
       yday: 353,
       hour: 19,
       min: '00',
       sec: 0,
       isdst: '0',
       monthname: 'December',
       monthname_short: 'Dec',
       weekday_short: 'Wed',
       weekday: 'Wednesday',
       ampm: 'PM',
       tz_short: 'EST',
       tz_long: 'America/New_York' },
    period: 1,
    high: { fahrenheit: '51', celsius: '11' },
    low: { fahrenheit: '32', celsius: '0' },
    conditions: 'Partly Cloudy',
    icon: 'partlycloudy',
    icon_url: 'http://icons.wxug.com/i/c/k/partlycloudy.gif',
    skyicon: '',
    pop: 0,
    qpf_allday: { in: 0, mm: 0 },
    qpf_day: { in: 0, mm: 0 },
    qpf_night: { in: 0, mm: 0 },
    snow_allday: { in: 0, cm: 0 },
    snow_day: { in: 0, cm: 0 },
    snow_night: { in: 0, cm: 0 },
    maxwind: { mph: 15, kph: 24, dir: 'NE', degrees: 42 },
    avewind: { mph: 11, kph: 18, dir: 'NE', degrees: 42 },
    avehumidity: 48,
    maxhumidity: 62,
    minhumidity: 36 }
  ]

  beforeEach(() => {
    wrapper = mount(<TenDay tenDays={mockWeather} />);
  })  

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should return elements', () => {
    wrapper = shallow(<TenDay tenDays={mockWeather} />);
    expect(wrapper.find('div').length).toEqual(1);
    expect(wrapper.find('h2').length).toEqual(1);
    expect(wrapper.find('article').length).toEqual(1);
    expect(wrapper.find('Card').length).toEqual(1);
  })

  it('should have a tenDays property', () => {
    expect(wrapper.props().tenDays).toBeDefined();
  })

  it('should have properties for the ten day forecast', () => {
    let tenDayProps = wrapper.props().tenDays;
    console.log(tenDayProps)
    expect(tenDayProps[0].date.weekday).toEqual('Wednesday');
    expect(tenDayProps[0].icon_url).toEqual('http://icons.wxug.com/i/c/k/partlycloudy.gif');
    expect(tenDayProps[0].high.fahrenheit).toEqual('51');
    expect(tenDayProps[0].low.fahrenheit).toEqual('32');
  })

})