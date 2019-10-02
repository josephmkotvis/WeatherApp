import React from 'react'

const WeatherPicker = ({ weatherOptions }) => {

    const indexShown = 0;

    return (
        <div className="slds-truncate" title="Company One" onClick={() => { console.log(weatherOptions[indexShown]) }}>

            {weatherOptions.length > 0 && indexShown !== 0 ?
                <span className="slds-icon_container slds-icon-utility-left" title="Show previous weather" onClick={() => { indexShown-- }}>
                    <svg className="slds-icon slds-icon-text-default slds-icon_x-small" aria-hidden="true">
                        <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#left"></use>
                    </svg>
                    <span className="slds-assistive-text">Show previous weather</span>
                </span >
                :
                null
            }

            <img src={`http://openweathermap.org/img/wn/${weatherOptions[indexShown].icon}@2x.png`} className="slds-icon slds-icon-text-default" alt={weatherOptions[indexShown].main} />
            {weatherOptions[indexShown].main}


            {weatherOptions.length > 0 && indexShown !== (weatherOptions.length - 1) ?
                <span className="slds-icon_container slds-icon-utility-right" title="Show next weather" onClick={() => { indexShown++ }}>
                    <svg className="slds-icon slds-icon-text-default slds-icon_x-small" aria-hidden="true">
                        <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#right"></use>
                    </svg>
                    <span className="slds-assistive-text">Show next weather</span>
                </span > :
                null
            }

        </div>
    )
};

export default WeatherPicker;
