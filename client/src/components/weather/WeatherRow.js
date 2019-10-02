import React from 'react'
import moment from 'moment';
import WeatherPicker from './WeatherPicker';
import weather from '../../reducers/weather';

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
                    <WeatherPicker weatherOptions={weatherInfo.weather} />
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
