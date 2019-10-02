import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addLocation } from '../../actions/location';
import { Link } from 'react-router-dom';


const NewLocationButton = ({ locations, isAddingLocation, selected, addLocation }) => (
    <li key={locations.length} className={'slds-vertical-tabs__nav-item ' + (selected._id === null && isAddingLocation ? "slds-is-active" : "")} title={`Tab ${locations.length}`} role="presentation">
        <Link className="slds-vertical-tabs__link"
            role="tab"
            to="/"
            tabIndex={locations.length}
            aria-selected="true"
            aria-controls={`slds-vertical-tabs-${locations.length}`}
            id={`slds-vertical-tabs-${locations.length} nav`}
            onClick={() => { addLocation() }}
        >
            <span className="slds-truncate" title={`Tab ${locations.length}`} > Create new location </span>
            <span className="slds-vertical-tabs__right-icon">
                <span className="slds-icon_container slds-icon_container_circle slds-icon-action-new" title="Description of icon when needed">
                    <svg className="slds-icon" aria-hidden="true" style={{ width: '16px', height: '16px' }} >
                        <use xlinkHref="/assets/icons/action-sprite/svg/symbols.svg#new"></use>
                    </svg>
                    <span className="slds-assistive-text">Description of icon when needed</span>
                </span>
            </span>
        </Link>
    </li >

)

NewLocationButton.propTypes = {
    locations: PropTypes.array.isRequired,
    isAddingLocation: PropTypes.bool.isRequired,
    addLocation: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    locations: state.location.locations,
    isAddingLocation: state.location.isAddingLocation,
    selected: state.location.selected
});

export default connect(mapStateToProps, { addLocation })(NewLocationButton);