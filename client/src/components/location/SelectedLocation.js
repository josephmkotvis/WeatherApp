import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DesertSVG from '../common/DesertSVG';



const SelectedLocation = ({ location, weather }) => {
    return (
        location._id ?
            <div onClick={() => console.log('w', weather, 'l', location)}>
                {location.name}
                {weather.name}
            </div>
            :
            <DesertSVG msg='No location is selected' />
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
