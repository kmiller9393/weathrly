import React, { Component } from 'react';
import Card from '../Card/Card.js';
import { getSevenHourIcons } from '../../utils/getSevenHourIcons';
import './SevenHour.css';

export default class SevenHour extends Component {
  getIcons = icon => {
    if (icon) {
      const weatherIcon = getSevenHourIcons(icon);

      return weatherIcon;
    }
  };

  render() {
    let sevenHours = this.props.sevenHours.slice(0, 7);

    return (
      <div className="seven-hour-container">
        <h2 className="seven-hour-title">7 Hour Forecast</h2>
        <article className="seven-hour-article">
          {sevenHours.map(hour => {
            return (
              <Card
                hour={hour.FCTTIME.civil}
                icon={this.getIcons(hour.icon)}
                temp={hour.temp.english + '°F'}
              />
            );
          })}
        </article>
      </div>
    );
  }
}
