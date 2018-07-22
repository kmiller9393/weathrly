import React from 'react';
import Image from './images/sun.svg';
import Card from './Card.js';
import { currentWeather } from './cleaners.js';

// export default function TenDay(props) {
//   return (
//     <div className="app-component ten-day-component">
//       <h1 className="ten-day-header">10 Day Forecast</h1>
//       <article className="ten-day-article">
//         <span className="ten-day-day">
//           <p>{dayNames[todayNumber]}</p>
//           <img alt="weather logo" className="ten-day-icon" src={Image}/>
//           <h3>100</h3>
//           <h3>sunny</h3>
//         </span>
        
//         <span className="ten-day-day">
//           <p>{dayNames[todayNumber + 1]}</p>
//           <img alt="weather logo" className="ten-day-icon" src={Image} />
//           <h3>100</h3>
//           <h3>sunny</h3>
//         </span>
        
//         <span className="ten-day-day">
//           <p>{dayNames[todayNumber + 2]}</p>
//           <img alt="weather logo" className="ten-day-icon" src={Image} />
//           <h3>100</h3>
//           <h3>sunny</h3>
//         </span>
        
//         <span className="ten-day-day">
//           <p>{dayNames[todayNumber + 3]}</p>
//           <img alt="weather logo" className="ten-day-icon" src={Image} />
//           <h3>100</h3>
//           <h3>sunny</h3>
//         </span>
        
//         <span className="ten-day-day">
//           <p>{dayNames[todayNumber + 4]}</p>
//           <img alt="weather logo" className="ten-day-icon" src={Image} />
//           <h3>100</h3>
//           <h3>sunny</h3>
//         </span>
        
//         <span className="ten-day-day">
//           <p>{dayNames[todayNumber + 5]}</p>
//           <img alt="weather logo" className="ten-day-icon" src={Image} />
//           <h3>100</h3>
//           <h3>sunny</h3>
//         </span>
        
//         <span className="ten-day-day">
//           <p>{dayNames[todayNumber + 6]}</p>
//           <img alt="weather logo" className="ten-day-icon" src={Image} />
//           <h3>100</h3>
//           <h3>sunny</h3>
//         </span>
        
//         <span className="ten-day-day">
//           <p>{dayNames[todayNumber + 7]}</p>
//           <img alt="weather logo" className="ten-day-icon" src={Image} />
//           <h3>100</h3>
//           <h3>sunny</h3>
//         </span>
        
//         <span className="ten-day-day">
//           <p>{dayNames[todayNumber + 8]}</p>
//           <img alt="weather logo" className="ten-day-icon" src={Image} />
//           <h3>100</h3>
//           <h3>sunny</h3>
//         </span>
        
//         <span className="ten-day-day">
//           <p>{dayNames[todayNumber + 9]}</p>
//           <img alt="weather logo" className="ten-day-icon" src={Image} />
//           <h3>100</h3>
//           <h3>sunny</h3>
//         </span>
//       </article>
//     </div>
//   );
// }


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

