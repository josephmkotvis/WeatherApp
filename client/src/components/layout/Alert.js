import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { closeAlert } from '../../actions/alert';


const Alert = ({ alerts, closeAlert }) =>
  alerts !== null && alerts.length > 0 && alerts.map(alert => (

    <div key={alert.id} className={`slds-notify slds-notify_alert slds-theme_alert-texture slds-theme_${alert.alertType}`} role="alert">
      <span className="slds-assistive-text">{alert.alertType}</span>
      <span className="slds-icon_container slds-icon-utility-warning slds-m-right_x-small" title={alert.icon}>
        <svg className="slds-icon slds-icon_x-small" aria-hidden="true">
          <use xlinkHref={`/assets/icons/utility-sprite/svg/symbols.svg#${alert.icon}`}></use>
        </svg>
      </span>
      <h2>
        {alert.msg}
      </h2>
      <div className="slds-notify__close">
        <button className="slds-button slds-button_icon slds-button_icon-small" title="Close" onClick={() => closeAlert(alert.id)}>
          <svg className="slds-button__icon" aria-hidden="true">
            <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
          </svg>
          <span className="slds-assistive-text">Close</span>
        </button>
      </div>
    </div>
  ))

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
  closeAlert: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  alerts: state.alert
});

export default connect(mapStateToProps, { closeAlert })(Alert);