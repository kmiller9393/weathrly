import React from 'react';
import Image from './images/sun.svg';
import Card from './Card.js';
import { currentWeather } from './cleaners.js';

export default function TenDay(props) {

let tenDays = props.tenDays;

return (
  <div className="app-component ten-day-component">
    <h2 className="ten-day-header">Ten Day Forecast</h2>
    <article className="ten-day-container">
      {
        tenDays.map(day => {
          return (
            <Card
            day={day.date.weekday}
            icon={day.icon_url}
            high={day.high.fahrenheit + '°F'}
            low={day.low.fahrenheit + '°F'}
            />  
          )
        })
      }
    </article>
  </div>
  )
}

