import React, {useEffect} from 'react'
// import { relative } from 'path';
import { loadLocations } from '../../actions/location';
import Location from '../location/Location';
import store from '../../store'; 
import SelectedLocation from '../location/SelectedLocation';

// import {Link} from 'react-router-dom';

const Weather = () => {
  
  useEffect(() => {
    store.dispatch(loadLocations());
  }, []);
  

  const fullheight = {
    minHeight: '100vh'
  };

    return (
    <div className="slds-vertical-tabs" style={fullheight}>
      <ul className="slds-vertical-tabs__nav" role="tablist" aria-orientation="vertical">
      <Location />
      </ul>
      <div className="slds-vertical-tabs__content slds-show" id="slds-vertical-tabs-0" role="tabpanel" aria-labelledby="slds-vertical-tabs-0__nav">
        <div className="slds-text-longform">
         <SelectedLocation/>
        </div>
      </div>
    </div>
    )
}

export default Weather
