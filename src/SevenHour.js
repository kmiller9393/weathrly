import React from 'react';

let date;
let hour;
let timeType;
let newHour;

let dayHours = (hoursAdded) => {
  date = new Date();
  timeType = '';
  hour = date.getHours();
  newHour = hour + hoursAdded;

  if (newHour <= 11) {
    timeType = ' AM';
  } else {
    timeType = ' PM';
  }

  if (newHour > 24) {
    newHour = newHour - 24;
  } else if (newHour > 12) {
    newHour = newHour - 12;
  }

  if (newHour === 0) {
    newHour = 12;
  } 
  
  return newHour + timeType;
};


export default function SevenHour(props) {
  return (
    <div className="seven-hour-component app-component">
      <h1 className="seven-hour-title">7 Hour Forecast</h1>
      <article className="seven-hour-article">
        <div className="seven-hour-hour">
          <h3 className="seven-hour-times">{dayHours(1)}</h3>
        </div>
        <div className="seven-hour-hour">
          <h3 className="seven-hour-times">{dayHours(2)}</h3>
        </div>
        <div className="seven-hour-hour">
          <h3 className="seven-hour-times">{dayHours(3)}</h3>
        </div>
        <div className="seven-hour-hour">
          <h3 className="seven-hour-times">{dayHours(4)}</h3>
        </div>
        <div className="seven-hour-hour">
          <h3 className="seven-hour-times">{dayHours(5)}</h3>
        </div>
        <div className="seven-hour-hour">
          <h3 className="seven-hour-times">{dayHours(6)}</h3>
        </div>
        <div className="seven-hour-hour">
          <h3 className="seven-hour-times">{dayHours(7)}</h3>
        </div>
      </article>
    </div>
  );
}

