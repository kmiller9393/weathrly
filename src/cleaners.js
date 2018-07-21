export const currentWeather = data => {
  const currDay = data.forecast.simpleforecast.forecastday.find(currDay =>  currDay.period === 1)
  const currDayObj = { 
        time: data.current_observation.observation_time, 
        location: data.current_observation.display_location.full, 
        currentTemp: data.current_observation.temp_f + '°F', 
        currentHigh: currDay.high.fahrenheit + '° F', 
        currentLow: currDay.low.fahrenheit + '° F', 
        conditions: currDay.conditions, 
        icon: currDay.icon_url 
      }


      //let dataName  = data....splice(0, 7);

      //const sevehourobj = dataName.reduce((sevenhourobj, currentEl) {
        //let blah = {hour:
                      // temp:}

        // };
        // sevenhourobj.push(blah)
        // return acc
      // }, [])


  return (currDayObj) //sevenHour, //10dayobj)
}