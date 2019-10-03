import React from 'react'
import WeatherTable from './WeatherTable';


const Forecast = ({ forecast }) => forecast !== null && Object.keys(forecast).length > 0 &&  Object.keys(forecast).map(date => {
    return (
        <article className="slds-card" key={date}>
            <div className="slds-card__header slds-grid">
                <header className="slds-media slds-media_center slds-has-flexi-truncate">
                    <div className="slds-media__figure">
                        <span className="slds-icon_container slds-icon-standard-date-time" title="date_input">
                            <svg className="slds-icon slds-icon_small" aria-hidden="true">
                                <use xlinkHref="/assets/icons/standard-sprite/svg/symbols.svg#date_input"></use>
                            </svg>
                            <span className="slds-assistive-text">Date</span>
                        </span>
                    </div>
                    <div className="slds-media__body">
                        <h2 className="slds-card__header-title">
                            <span className="slds-card__header-link slds-truncate" title={date}>
                                <span>{date}</span>
                            </span>
                        </h2>
                    </div>
                </header>
            </div>
            <WeatherTable dataArray={forecast[date]} />
        
        </article >
    )

});

export default Forecast;
