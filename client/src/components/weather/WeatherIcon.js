import React from 'react'



const WeatherIcon = ({icon, alt}) => {
  return (
    <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} className="slds-icon slds-icon-text-default" alt={alt} />
  )
}

export default WeatherIcon
