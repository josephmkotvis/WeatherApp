import React, { useEffect } from 'react'
import { loadLocations } from '../../actions/location';
import Location from '../location/Location';
import SelectedLocation from '../location/SelectedLocation';
import NewLocationButton from '../location/NewLocationButton';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


const WeatherPage = ({isAddingLocation, loadLocations}) => {

  useEffect(() => {
    loadLocations();
  }, []);


  const fullheight = {
    minHeight: '100vh'
  };

  return (
    <div className="slds-vertical-tabs" style={fullheight}>
      <ul className="slds-vertical-tabs__nav" role="tablist" aria-orientation="vertical">
        <Location />
        <NewLocationButton />
      </ul>
      <div className="slds-vertical-tabs__content slds-show" id="slds-vertical-tabs-0" role="tabpanel" aria-labelledby="slds-vertical-tabs-0__nav">
        <div className="slds-text-longform" >
          { isAddingLocation ? 
          <div> 111 </div>
          :
          <SelectedLocation />

          }
        </div>
      </div>
    </div>
  )
}

WeatherPage.propTypes = {
  selected: PropTypes.object,
  isAddingLocation: PropTypes.bool.isRequired

}

const mapStateToProps = state => ({
  selected: state.location.selected,
  isAddingLocation: state.location.isAddingLocation
});

export default connect(mapStateToProps, {loadLocations })(WeatherPage);
