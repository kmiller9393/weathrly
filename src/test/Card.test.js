import React from 'react';
import { shallow, mount } from 'enzyme';
import Card from '../Card';

describe('Card component', () => {
  let wrapper;

  let tenDayMockData = 
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
    mslp: { english: '30.05', metric: '1018' } 
    }
  ];

  beforeEach(() => {
    wrapper = mount(
      <Card 
      tenDays={tenDayMockData}
      sevenHours={mockHourData}
      />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  });

  it('should return elements', () => {
    expect(wrapper.find('div').length).toEqual(1);
    expect(wrapper.find('p').length).toEqual(5);
    expect(wrapper.find('img').length).toEqual(1);
    expect(wrapper.find('article').length).toEqual(1);
  });

  it('should render the proper data for both the SevenHour and TenDay components', () => {
    let sevenHourProps = wrapper.props().sevenHours;
    let tenDayProps = wrapper.props().tenDays;

    expect(sevenHourProps[0].FCTTIME.civil).toEqual('12:00 PM');
    expect(sevenHourProps[0].icon_url).toEqual('http://icons.wxug.com/i/c/k/partlycloudy.gif'); 
    expect(sevenHourProps[0].temp.english).toEqual('47');
    
    expect(tenDayProps[0].date.weekday).toEqual('Wednesday');
    expect(tenDayProps[0].icon_url).toEqual('http://icons.wxug.com/i/c/k/partlycloudy.gif');
    expect(tenDayProps[0].high.fahrenheit).toEqual('51');
    expect(tenDayProps[0].low.fahrenheit).toEqual('32');
  })

  it('should have props passed in', () => {
    wrapper = mount(<Card data={10} />)
    expect(wrapper.props().data).toEqual(10);
  });
});

