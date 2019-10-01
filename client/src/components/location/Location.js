import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

const Location = ({ locations }) => 
locations !== null && locations.length > 0 && locations.map( (location , index) => (
       <li key={index} className="slds-vertical-tabs__nav-item slds-is-active" title={`Tab ${index + 1}`} role="presentation">
          <Link className="slds-vertical-tabs__link" to="/" role="tab" tabIndex={index} aria-selected="true" aria-controls= {`slds-vertical-tabs-${index}`} id={`slds-vertical-tabs-${index} nav`}>
            <span className="slds-vertical-tabs__left-icon"></span>
            <span className="slds-truncate" title={`Tab ${index + 1}`} > {location.name} </span>
            <span className="slds-vertical-tabs__right-icon"></span>
          </Link>
        </li>  

))

Location.propTypes = {
    locations: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
    locations: state.location.locations
});

export default connect(mapStateToProps)(Location);