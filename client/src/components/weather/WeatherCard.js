import React from 'react'
import Spinner from '../common/Spinner'

const WeatherCard = ({ weather }) => {
    return (
        weather.weather ?
            <article className="slds-card" onClick={() => console.log(weather)}>
                <div className="slds-card__body slds-card__body_inner">
                    <span className="slds-icon_container slds-icon-utility-announcement" title="Current Weather">
                        <img src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt={weather.weather[0].description} />
                    </span>
                    <span className="slds-text-body_regular">
                        {weather.weather[0].main} -  {weather.weather[0].description}
                    </span>
                    <span className="slds-text-body_regular">
                        <br />
                        Temperature: {weather.main.temp}
                        < br />
                        Wind Pressure: {weather.main.pressure}
                        < br />
                        Wind speed: {weather.wind.speed}
                    </span>
                </div>
            </article >
            :
            <Spinner msg='Loading Weather' size='Large' />
    )
}

export default WeatherCard
