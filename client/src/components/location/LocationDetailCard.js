import React from 'react'
import WeatherTable from '../weather/WeatherTable'

const LocationDetailCard = ({ location, currentWeather }) => {

    return (
        <article className="slds-card" >
            <div className="slds-card__header slds-grid">
                <header className="slds-media slds-media_center slds-has-flexi-truncate">
                    <div className="slds-media__figure">
                        <span className="slds-icon_container slds-icon-standard-account" title="Location">
                            <svg className="slds-icon slds-icon_small" aria-hidden="true">
                                <use xlinkHref="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
                            </svg>
                            <span className="slds-assistive-text">Location</span>
                        </span>
                    </div>
                    <div className="slds-media__body">
                        <h2 className="slds-card__header-title">
                            <span className="slds-card__header-link slds-truncate" title="Accounts">
                                <span> {location.name} - {location.city} </span>
                            </span>
                        </h2>
                    </div>
                </header>
            </div>
            <div className="slds-card__body slds-card__body_inner"> {location.description} </div>
            <WeatherTable dataArray={[currentWeather]} />
        </article>
    )
}

export default LocationDetailCard
