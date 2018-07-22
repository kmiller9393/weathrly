import React from 'react';
import Image from './images/sun.svg';
import Card from './Card.js';

let day = new Date();
let todayNumber = day.getDay()
let dayNames = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday");

export default function TenDay(props) {
  return (
    <div className="app-component ten-day-component">
      <h1 className="ten-day-header">10 Day Forecast</h1>
      <article className="ten-day-article">
        <span className="ten-day-day">
          <p>{dayNames[todayNumber]}</p>
          <img alt="weather logo" className="ten-day-icon" src={Image}/>
          <h3>100</h3>
          <h3>sunny</h3>
        </span>
        
        <span className="ten-day-day">
          <p>{dayNames[todayNumber + 1]}</p>
          <img alt="weather logo" className="ten-day-icon" src={Image} />
          <h3>100</h3>
          <h3>sunny</h3>
        </span>
        
        <span className="ten-day-day">
          <p>{dayNames[todayNumber + 2]}</p>
          <img alt="weather logo" className="ten-day-icon" src={Image} />
          <h3>100</h3>
          <h3>sunny</h3>
        </span>
        
        <span className="ten-day-day">
          <p>{dayNames[todayNumber + 3]}</p>
          <img alt="weather logo" className="ten-day-icon" src={Image} />
          <h3>100</h3>
          <h3>sunny</h3>
        </span>
        
        <span className="ten-day-day">
          <p>{dayNames[todayNumber + 4]}</p>
          <img alt="weather logo" className="ten-day-icon" src={Image} />
          <h3>100</h3>
          <h3>sunny</h3>
        </span>
        
        <span className="ten-day-day">
          <p>{dayNames[todayNumber + 5]}</p>
          <img alt="weather logo" className="ten-day-icon" src={Image} />
          <h3>100</h3>
          <h3>sunny</h3>
        </span>
        
        <span className="ten-day-day">
          <p>{dayNames[todayNumber + 6]}</p>
          <img alt="weather logo" className="ten-day-icon" src={Image} />
          <h3>100</h3>
          <h3>sunny</h3>
        </span>
        
        <span className="ten-day-day">
          <p>{dayNames[todayNumber + 7]}</p>
          <img alt="weather logo" className="ten-day-icon" src={Image} />
          <h3>100</h3>
          <h3>sunny</h3>
        </span>
        
        <span className="ten-day-day">
          <p>{dayNames[todayNumber + 8]}</p>
          <img alt="weather logo" className="ten-day-icon" src={Image} />
          <h3>100</h3>
          <h3>sunny</h3>
        </span>
        
        <span className="ten-day-day">
          <p>{dayNames[todayNumber + 9]}</p>
          <img alt="weather logo" className="ten-day-icon" src={Image} />
          <h3>100</h3>
          <h3>sunny</h3>
        </span>
      </article>
    </div>
  );
}

