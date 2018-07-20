// import WeatherData from './WeatherData.js';


// export const city = () => {
//   return WeatherData.current_observation.display_location.city;
// }

// export const state = () => {
//   return WeatherData.current_observation.display_location.state_name;
// }

// export const temp = () => {
//   return WeatherData.current_observation.temp_f;
// }

// export const condition = () => {
//   return WeatherData.current_observation.weather;
// }

// export const temp = () => {
//   return apikeys.weather.current_ovservations.temp_f;
// }

export const currWeather = data => {
  const currDay = data.forecast.simpleforecast.forecastday.find(currDay =>  currDay.period === 1)
  const currDayObj = { 
        time: data.current_observation.observation_time, 
        location: data.current_observation.display_location.full, 
        current: data.current_observation.temp_f + '°F', 
        high: currDay.high.fahrenheit + '° F', 
        low: currDay.low.fahrenheit + '° F', 
        conditions: currDay.conditions, 
        icon: currDay.icon_url}
  return currDayObj
}