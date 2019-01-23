import React, { Component } from 'react';
import Card from '../Card/Card.js';
import { getTenDayIcons } from '../../utils/getTenDayIcons';
import './TenDay.css';

export default class TenDay extends Component {
  getIcon = icon => {
    if (icon) {
      const weatherIcon = getTenDayIcons(icon);

      return weatherIcon;
    }
  };

  render() {
    let tenDays = this.props.tenDays;

    return (
      <div className="ten-day-container">
        <h2 className="ten-day-header">Ten Day Forecast</h2>
        <article className="ten-day-card-container">
          {tenDays.map(day => {
            return (
              <Card
                day={day.date.weekday}
                icon={this.getIcon(day.icon)}
                high={day.high.fahrenheit + '°F'}
                low={day.low.fahrenheit + '°F'}
              />
            );
          })}
        </article>
      </div>
    );
  }
}
