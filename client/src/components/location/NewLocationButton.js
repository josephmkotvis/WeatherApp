import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const NewLocationButton = ({ locations }) => (
    <li key={locations.length} className={'slds-vertical-tabs__nav-item ' + (true ? "slds-is-active" : "")} title={`Tab ${locations.length}`} role="presentation">
        <span className="slds-vertical-tabs__link"
            role="tab"
            tabIndex={locations.length}
            aria-selected="true"
            aria-controls={`slds-vertical-tabs-${locations.length}`}
            id={`slds-vertical-tabs-${locations.length} nav`}
            onClick={() => { console.log(locations) }}>
            <span className="slds-truncate" title={`Tab ${locations.length}`} > Create new location </span>
            <span className="slds-vertical-tabs__right-icon">
                <span className="slds-icon_container slds-icon_container_circle slds-icon-action-new" title="Description of icon when needed">
                    <svg className="slds-icon" aria-hidden="true">
                        <use xlinkHref="/assets/icons/action-sprite/svg/symbols.svg#new"></use>
                    </svg>
                    <span className="slds-assistive-text">Description of icon when needed</span>
                </span>
            </span>
        </span>
    </li >

)

NewLocationButton.propTypes = {
    locations: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
    locations: state.location.locations,

});

export default connect(mapStateToProps, {})(NewLocationButton);