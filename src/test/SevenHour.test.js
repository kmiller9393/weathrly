import React from 'react';
import { shallow, mount } from 'enzyme';
import { currentWeather } from '../cleaners.js';
import data from '../WeatherData';
import SevenHour from '../SevenHour';

describe('SevenHour component', () => {
  let wrapper;
  let mockHourData= [ 
  { FCTTIME: 
     { hour: '12',
       hour_padded: '12',
       min: '00',
       min_unpadded: '0',
       sec: '0',
       year: '2017',
       mon: '12',
       mon_padded: '12',
       mon_abbrev: 'Dec',
       mday: '20',
       mday_padded: '20',
       yday: '353',
       isdst: '0',
       epoch: '1513789200',
       pretty: '12:00 PM EST on December 20, 2017',
       civil: '12:00 PM',
       month_name: 'December',
       month_name_abbrev: 'Dec',
       weekday_name: 'Wednesday',
       weekday_name_night: 'Wednesday Night',
       weekday_name_abbrev: 'Wed',
       weekday_name_unlang: 'Wednesday',
       weekday_name_night_unlang: 'Wednesday Night',
       ampm: 'PM',
       tz: '',
       age: '',
       UTCDATE: '' },
    temp: { english: '47', metric: '8' },
    dewpoint: { english: '30', metric: '-1' },
    condition: 'Partly Cloudy',
    icon: 'partlycloudy',
    icon_url: 'http://icons.wxug.com/i/c/k/partlycloudy.gif',
    fctcode: '2',
    sky: '59',
    wspd: { english: '11', metric: '18' },
    wdir: { dir: 'NE', degrees: '48' },
    wx: 'Partly Cloudy',
    uvi: '1',
    humidity: '53',
    windchill: { english: '41', metric: '5' },
    heatindex: { english: '-9999', metric: '-9999' },
    feelslike: { english: '41', metric: '5' },
    qpf: { english: '0.0', metric: '0' },
    snow: { english: '0.0', metric: '0' },
    pop: '0',
    mslp: { english: '30.05', metric: '1018' } } ];

  beforeEach(() => {
    wrapper = mount(<SevenHour sevenHours={ mockHourData } />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });
})