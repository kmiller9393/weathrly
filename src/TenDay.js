import React from 'react';
import App from './App';
import Image from './images/sun.svg';


export default function TenDay(props) {
  return (
    <div className="app-component ten-day-component">
      <h1 className="ten-day-header">10 Day Forecast</h1>
      <article className="ten-day-article">
        <span className="ten-day-day">
          <p>Day</p>
          <img alt="weather logo" className="ten-day-icon" src={Image}/>
          <h3>100</h3>
          <h3>sunny</h3>
        </span>
        
        <span className="ten-day-day">
          <p>Day</p>
          <img alt="weather logo" className="ten-day-icon" src={Image} />
          <h3>100</h3>
          <h3>sunny</h3>
        </span>
        
        <span className="ten-day-day">
          <p>Day</p>
          <img alt="weather logo" className="ten-day-icon" src={Image} />
          <h3>100</h3>
          <h3>sunny</h3>
        </span>
        
        <span className="ten-day-day">
          <p>Day</p>
          <img alt="weather logo" className="ten-day-icon" src={Image} />
          <h3>100</h3>
          <h3>sunny</h3>
        </span>
        
        <span className="ten-day-day">
          <p>Day</p>
          <img alt="weather logo" className="ten-day-icon" src={Image} />
          <h3>100</h3>
          <h3>sunny</h3>
        </span>
        
        <span className="ten-day-day">
          <p>Day</p>
          <img alt="weather logo" className="ten-day-icon" src={Image} />
          <h3>100</h3>
          <h3>sunny</h3>
        </span>
        
        <span className="ten-day-day">
          <p>Day</p>
          <img alt="weather logo" className="ten-day-icon" src={Image} />
          <h3>100</h3>
          <h3>sunny</h3>
        </span>
        
        <span className="ten-day-day">
          <p>Day</p>
          <img alt="weather logo" className="ten-day-icon" src={Image} />
          <h3>100</h3>
          <h3>sunny</h3>
        </span>
        
        <span className="ten-day-day">
          <p>Day</p>
          <img alt="weather logo" className="ten-day-icon" src={Image} />
          <h3>100</h3>
          <h3>sunny</h3>
        </span>
        
        <span className="ten-day-day">
          <p>Day</p>
          <img alt="weather logo" className="ten-day-icon" src={Image} />
          <h3>100</h3>
          <h3>sunny</h3>
        </span>
      </article>
    </div>
  );
}

