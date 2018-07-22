import React from 'react';

export default function Card(props) {
    return (
      <div className="card-template">
        <p className="card-month">{props.month}</p>
        <p className="card-day">{props.day}</p>
        <p className="card-hour">{props.hour}</p>
        <p className="card-temp">{props.temp}</p>
        <img src={props.icon} />
        <article className="day-extremes-container">
          <p className="day-extremes-high">{props.high}<strong> / </strong></p>
          <p className="day-extremes-low">{props.low}</p>
        </article>
      </div>
    );
}
