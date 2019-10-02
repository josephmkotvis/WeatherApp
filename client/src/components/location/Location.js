import React from 'react';
import PropTypes from 'prop-types';
import { loadForecast } from '../../actions/forecast';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import WeatherIcon from '../weather/WeatherIcon';

const Location = ({ locations, selected, weather, isAddingLocation, loadForecast }) =>
  locations !== null && locations.length > 0 && locations.map((location, index) => (
    <li key={index} className={'slds-vertical-tabs__nav-item ' + (selected._id === location._id && !isAddingLocation ? "slds-is-active" : "")} title={`Tab ${index + 1}`} role="presentation"    >
      <Link className="slds-vertical-tabs__link" to="/"
        role="tab"
        tabIndex={index}
        aria-selected="true"
        aria-controls={`slds-vertical-tabs-${index}`}
        id={`slds-vertical-tabs-${index} nav`}
        onClick={() => loadForecast(location)}>
        <span className="slds-truncate" title={`Tab ${index + 1}`} >
          {location.name} - {location.city}
          {weather[location.city] ?
            <span>
              <span className="slds-m-left_x-small">
                <span className="slds-media slds-media--center ">
                  <span className="slds-icon_container slds-icon_container_circle slds-icon-action-email" style={{ padding: '.5px', marginRight: '5px' }}>
                    <WeatherIcon className="slds-icon slds-icon-text-default slds-icon_small" icon={weather[location.city].weather[0].icon} alt={weather[location.city].weather[0].main} />
                  </span>
                  {weather[location.city].weather[0].main} - {weather[location.city].temp} {'\u00b0'}
                </span>
              </span>
            </span>
            :
            null}

        </span>

      </Link >

    </li >

  ))

Location.propTypes = {
  locations: PropTypes.array.isRequired,
  selected: PropTypes.object,
  weather: PropTypes.object,
  loadForecast: PropTypes.func.isRequired,
  isAddingLocation: PropTypes.bool

}

const mapStateToProps = state => ({
  locations: state.location.locations,
  selected: state.location.selected,
  weather: state.weather,
  isAddingLocation: state.location.isAddingLocation
});

export default connect(mapStateToProps, { loadForecast })(Location);