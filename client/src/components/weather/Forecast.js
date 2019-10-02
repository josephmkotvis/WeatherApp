import React from 'react'
import WeatherRow from './WeatherRow';


const Forecast = ({ weather }) => weather !== null && Object.keys(weather).length > 0 &&  Object.keys(weather).map(date => {
    return (
        <article className="slds-card" key={date}>
            <div className="slds-card__header slds-grid">
                <header className="slds-media slds-media_center slds-has-flexi-truncate">
                    <div className="slds-media__figure">
                        <span className="slds-icon_container slds-icon-standard-account" title="date_input">
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
            <div className="slds-card__body">
                <table className="slds-table slds-table_cell-buffer slds-no-row-hover slds-table_bordered slds-table_fixed-layout" role="grid">
                    <thead>
                        <tr className="slds-line-height_reset">
                             <th className="" scope="col">
                                <div className="slds-truncate" title="Name">Time </div>
                            </th>
                            <th className="" scope="col">
                                <div className="slds-truncate" title="Name">Weather</div>
                            </th>
                            <th className="" scope="col">
                                <div className="slds-truncate" title="Company">Temp</div>
                            </th>
                            <th className="" scope="col">
                                <div className="slds-truncate" title="Title">Humidity</div>
                            </th>
                            <th className="" scope="col">
                                <div className="slds-truncate" title="Email">Wind Speed </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <WeatherRow weatherInfos={weather[date]}/>
                    </tbody>
                </table>
            </div>
        </article >
    )

});

export default Forecast;
