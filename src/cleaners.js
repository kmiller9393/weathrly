import React from 'react';
import WeatherData from './WeatherData.js';
import apikeys from './apikeys.js';


const weather = {
  city: 'WeatherData.current_observation.display_location.city',
  state: 'WeatherData.current_observation.display_location.state_name',
  temp: 'WeatherData.current_observation.temp_f',
  condition: 'WeatherData.current_observation.weather'
}


export const city = () => {
  return WeatherData.current_observation.display_location.city;
}

export const state = () => {
  return WeatherData.current_observation.display_location.state_name;
}

export const temp = () => {
  return WeatherData.current_observation.temp_f;
}

export const condition = () => {
  return WeatherData.current_observation.weather;
}

// export const temp = () => {
//   return apikeys.weather.current_ovservations.temp_f;
// }