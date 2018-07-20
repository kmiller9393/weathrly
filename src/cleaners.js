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