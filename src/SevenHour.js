import React from 'react';

let date;
let TimeType;
let hour;

date = new Date();

hour = date.getHours();

let dayHours = (hoursAdded) => {
  if (hour + hoursAdded <= 11) {
    TimeType = 'AM';
  } else {
    TimeType = 'PM';
  }
  if (hour + hoursAdded > 12) {
    hour = hour - 12;
  }
  if (hour + hoursAdded == 0) {
    hour = 12;
  } 
}

console.log(hour + 10);


export default function SevenHour(props) {
  return (
    <div className="seven-hour-component app-component">
      <h1 className="seven-hour-title">7 Hour Forecast</h1>
      <article className="seven-hour-article">
        <div className="seven-hour-hour">{dayHours()}</div>
        <div className="seven-hour-hour">{dayHours()}</div>
        <div className="seven-hour-hour">{dayHours()}</div>
        <div className="seven-hour-hour">{dayHours()}</div>
        <div className="seven-hour-hour">{dayHours()}</div>
        <div className="seven-hour-hour">{dayHours()}</div>
        <div className="seven-hour-hour">{dayHours()}</div>
      </article>
    </div>
  );
}

