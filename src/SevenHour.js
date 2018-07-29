import React from 'react';
import Card from './Card.js';

export default function SevenHour(props) {

  let sevenHours = props.sevenHours.slice(0, 7);

  return (
    <div className="seven-hour-component app-component">
      <h2 className="seven-hour-title">7 Hour Forecast</h2>
      <article className="seven-hour-article">
        {
          sevenHours.map(hour => {
            return (
              <Card
                hour={hour.FCTTIME.civil}
                icon={hour.icon_url}
                temp={hour.temp.english + '°F'}
              />  
            )
          })
        }
      </article>
    </div>
  )
}