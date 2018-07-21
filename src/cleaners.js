export const currentWeather = data => {
  const currDay = data.forecast.simpleforecast.forecastday.find(currDay =>  currDay.period === 1)
  const currDayObj = { 
        location: data.current_observation.display_location.full, 
        currentTemp: data.current_observation.temp_f + '°F', 
        currentHigh: currDay.high.fahrenheit + '° F', 
        currentLow: currDay.low.fahrenheit + '° F', 
        conditions: currDay.conditions, 
        icon: currDay.icon_url ,
        overview: data.forecast.txt_forecast.forecastday[0].fcttext_metric
      }

  return (currDayObj) //sevenHour, //10dayobj)
}