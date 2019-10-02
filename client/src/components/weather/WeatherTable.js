import React from 'react'
import WeatherRow from './WeatherRow';


const WeatherTable = ({ dataArray }) => {
    return (
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
                        <WeatherRow weatherInfos={dataArray}/>
                    </tbody>
                </table>
            </div>
    )

};

export default WeatherTable;
