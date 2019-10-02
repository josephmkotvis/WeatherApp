import React, { useState, useEffect } from 'react'
import WeatherIcon from './WeatherIcon';

const WeatherPicker = ({ weatherOptions }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!weatherOptions[count]) {
            setCount(0);
        }
    });
    return (
        < div className="slds-truncate" title="Company One" >

            {
                weatherOptions.length > 0 && count !== 0 ?
                    <span className="slds-icon_container slds-icon-utility-left" style={{ cursor: 'pointer' }} title="Show previous weather" onClick={() => setCount(count - 1)}>
                        <svg className="slds-icon slds-icon-text-default slds-icon_x-small" aria-hidden="true">
                            <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#left"></use>
                        </svg>
                        <span className="slds-assistive-text">Show previous weather</span>
                    </span >
                    :
                    null
            }
            {weatherOptions[count] ?
                <span>
                    < WeatherIcon icon={weatherOptions[count].icon} src={weatherOptions[count].main} />
                    {weatherOptions[count].main}
                </span>
                : null
            }


            {
                weatherOptions.length > 0 && count !== (weatherOptions.length - 1) ?
                    <span className="slds-icon_container slds-icon-utility-right" style={{ cursor: 'pointer' }} title="Show next weather" onClick={() => setCount(count + 1)}>
                        <svg className="slds-icon slds-icon-text-default slds-icon_x-small" aria-hidden="true">
                            <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#right"></use>
                        </svg>
                        <span className="slds-assistive-text">Show next weather</span>
                    </span > :
                    null
            }

        </div >
    )
};

export default WeatherPicker;
