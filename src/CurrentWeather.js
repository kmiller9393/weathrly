import React, { Component } from 'react';
import App from './App';
import { city } from './cleaners.js';
import Image from './images/cloud-2.svg';
import { state } from './cleaners.js';
import { temp } from './cleaners.js';
import { condition } from './cleaners.js';


export default function CurrentWeather(props) {
      return(
      <div className="current-weather-component app-component">
        <h1 className="current-weather-city">
          <img className="weather-icon" src={Image} />
          { props.city }
        </h1>
        
        <h2 className="current-weather-condition">{ props.condition }</h2>
        <h2 className="current-weather-day">Current Day Here </h2>
        <h2 className="current-weather-temp">{ props.temp }º F</h2>
        <p className="current-weather-high">Expected High: { props.high }</p>
        <p className="current-weather-low">Expected Low: { props.low }</p>
        {/* <p>Summary: {}</p> */}
      </div>
    )
  }


//   render() {
//     return(
//       <div className="current-weather-component app-component">
//         <h1 className="current-weather-city">
//           <img className="weather-icon" src={Image} />
//           { this.props.state.city }
//         </h1>
//         <h3 className="current-weather-state">{ this.props.state.state }</h3>
//         <h2 className="current-weather-condition">{ this.props.state.condition }</h2>
//         <h2 className="current-weather-day">Current Day Here </h2>
//         <h2 className="current-weather-temp">{ this.props.state.temp }º F</h2>
//         <p className="current-weather-high">Expected High: { this.props.state.high }</p>
//         <p className="current-weather-low">Expected Low: { this.props.state.low }</p>
//         {/* <p>Summary: {}</p> */}
//       </div>
//     )
//   }
// }
