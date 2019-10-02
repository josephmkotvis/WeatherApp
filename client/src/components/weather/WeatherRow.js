import React from 'react'
import moment from 'moment';

const WeatherRow = ({ weatherInfos }) =>
    weatherInfos !== null && weatherInfos.length > 0 && weatherInfos.map((weatherInfo, index) => {
        return (
            <tr className="slds-hint-parent" key={index}>
                <th scope="row">
                    <div className="slds-truncate" title="Company One" >
                        {moment(weatherInfo.time, 'ddd DD-MMM-YYYY, hh:mm A').format('hh:mm A')}
                    </div>
                </th>
                <td role="gridcell">
                    <div className="slds-truncate" title="Company One" onClick={() => { console.log(weatherInfo) }}>
                        <img src={`http://openweathermap.org/img/wn/${weatherInfo.weather.icon}@2x.png`} className="slds-icon slds-icon-text-default" alt={weatherInfo.weather.main} />
                        {weatherInfo.weather.main}
                    </div>
                </td>
                <td role="gridcell">
                    <div className="slds-truncate" title="Director of Operations">
                        {weatherInfo.temp} {'\u00b0'}
                    </div>
                </td>
                <td role="gridcell">
                    <div className="slds-truncate" title="adam@company.com">
                        {weatherInfo.humidity}
                    </div>
                </td>
                <td role="gridcell">
                    <div className="slds-truncate" title="adam@company.com">
                        {weatherInfo.wind.speed}
                    </div>
                </td>
            </tr>
        )
    });

export default WeatherRow
