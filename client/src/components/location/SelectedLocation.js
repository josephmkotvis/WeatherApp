import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';



const SelectedLocation = ({ location, weather }) => {
    return (
        <div onClick={() => console.log('w', weather, 'l', location)}>
            {location.name}
            {weather.name}
        </div>
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
