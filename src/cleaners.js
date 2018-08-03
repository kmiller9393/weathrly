export const currentWeather = data => {
  let sevenHours = [];

  let tenDays = [];

  let weatherData;

  const currDay = data.forecast.simpleforecast.forecastday.find(
    currDay => currDay.period === 1
  );

  const currDayObj = {
    location: data.current_observation.display_location.full,
    currentTemp: data.current_observation.temp_f + '°F',
    currentHigh: currDay.high.fahrenheit + '° F',
    currentLow: currDay.low.fahrenheit + '° F',
    conditions: currDay.conditions,
    currentDay: currDay.date.weekday,
    icon: currDay.icon_url,
    overview: data.forecast.txt_forecast.forecastday[0].fcttext
  };

  sevenHours = data.hourly_forecast;

  tenDays = data.forecast.simpleforecast.forecastday;

  weatherData = {
    currDayObj,
    sevenHours,
    tenDays
  };

  return weatherData;
};
