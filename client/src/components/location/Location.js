import React from 'react';
import PropTypes from 'prop-types';
import { loadForecast } from '../../actions/forecast';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import WeatherIcon from '../weather/WeatherIcon';

const Location = ({ locations, selected, weather, loadForecast }) =>
  locations !== null && locations.length > 0 && locations.map((location, index) => (
    <li key={index} className={'slds-vertical-tabs__nav-item ' + (selected._id === location._id ? "slds-is-active" : "")} title={`Tab ${index + 1}`} role="presentation"    >
      <Link className="slds-vertical-tabs__link" to="/"
        role="tab"
        tabIndex={index}
        aria-selected="true"
        aria-controls={`slds-vertical-tabs-${index}`}
        id={`slds-vertical-tabs-${index} nav`} x
        onClick={() => loadForecast(location)}>
        <span className="slds-truncate" title={`Tab ${index + 1}`} >
          {location.name} - {location.city}
          {weather[location.city] ?
            <div>
              <br />
              <div onClick={() => { console.log(weather[location.city]) }}>
                <WeatherIcon icon={weather[location.city].weather[0].icon} alt={weather[location.city].weather[0].main} />
                {weather[location.city].weather[0].main} - {weather[location.city].temp} {'\u00b0'}
              </div>
            </div>

            :
            null}
        </span>

      </Link>

    </li>

  ))

Location.propTypes = {
  locations: PropTypes.array.isRequired,
  selected: PropTypes.object,
  weather: PropTypes.object,
  loadForecast: PropTypes.func.isRequired

}

const mapStateToProps = state => ({
  locations: state.location.locations,
  selected: state.location.selected,
  weather: state.weather
});

export default connect(mapStateToProps, { loadForecast })(Location);