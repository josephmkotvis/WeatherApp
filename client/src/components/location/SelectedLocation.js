import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DesertSVG from '../common/DesertSVG';
import LocationDetailCard from './LocationDetailCard';
import Forecast from '../weather/Forecast';



const SelectedLocation = ({ location, forecasts }) => {
    return (
        location._id ?
            <div >
                <LocationDetailCard location={location} />
                {
                    forecasts[location.city] ? 
                    <Forecast forecast={forecasts[location.city]} />
                    :
                    null
                }
            </div>
            :
            <DesertSVG msg='No location is selected' size='large' />
    );
};


SelectedLocation.propTypes = {
    location: PropTypes.object,
    forecasts: PropTypes.object
}

const mapStateToProps = state => ({
    location: state.location.selected,
    forecasts: state.forecast
});

export default connect(mapStateToProps)(SelectedLocation);
