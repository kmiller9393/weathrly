import React, { Component } from 'react';

export default class Card extends Component {
  render() {
    const { day, hour, temp, icon, high, low } = this.props;

    return (
      <div className="card-template">
        <p className="card-day">{day}</p>
        <p className="card-hour">{hour}</p>
        <p className="card-temp">{temp}</p>
        <img src={icon} alt="weather icon" />
        <article className="day-extremes-container">
          <p className="day-extremes-high">
            {high}
            <strong> / </strong>
          </p>
          <p className="day-extremes-low">{low}</p>
        </article>
      </div>
    );
  }
}
