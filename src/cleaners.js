import React from 'react';
import WeatherData from './WeatherData.js';


export const city = () => {
  return WeatherData.current_observation.display_location.city;
}
