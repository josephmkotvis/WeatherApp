import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DesertSVG from '../common/DesertSVG';
import LocationDetailCard from './LocationDetailCard';
import WeatherCard from '../weather/WeatherCard';



const SelectedLocation = ({ location, weather }) => {
    return (
        location._id ?
            <div>
                <LocationDetailCard location={location} />
                <WeatherCard weather={weather} />
            </div>
            :
            <DesertSVG msg='No location is selected' size='large' />
    );
};


SelectedLocation.propTypes = {
    location: PropTypes.object,
    weather: PropTypes.object
}

const mapStateToProps = state => ({
    location: state.location.selected,
    weather: state.weather
});

export default connect(mapStateToProps)(SelectedLocation);
