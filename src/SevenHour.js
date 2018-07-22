import React from 'react';
import Card from './Card.js';
import { currentWeather } from './cleaners.js';

export default function SevenHour(props) {

let sevenHours = props.sevenHours.slice(0, 7);

return (
    <div className="seven-hour-component app-component">
    <h1 className="seven-hour-title">7 Hour Forecast</h1>
    {
     sevenHours.map(hour => {
        return (
          <Card className="seven-hour-hour"
            hour={hour.FCTTIME.civil}
            icon={hour.icon_url}
            temp={hour.temp.english + '°F'}
          />  
        )
      })
    }
  </div>
  )
}