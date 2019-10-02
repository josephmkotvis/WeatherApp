import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import { createLocation } from '../../actions/location';
import PropTypes from 'prop-types'


const LocationForm = ({ setAlert, createLocation }) => {
    const [formData, setFormData] = useState(
        {
            name: '',
            description: '',
            city: ''
        }
    );

    const { name, description, city } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        createLocation({
            name,
            description,
            city
        })

    }

    return (
        <Fragment>
            <article className="slds-card" >
                <div className="slds-card__header slds-grid">
                    <header className="slds-media slds-media_center slds-has-flexi-truncate">
                        <div className="slds-media__figure">
                            <span className="slds-icon_container slds-icon-standard-account" title="Location">
                                <svg className="slds-icon slds-icon_small" aria-hidden="true">
                                    <use xlinkHref="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
                                </svg>
                                <span className="slds-assistive-text">Location</span>
                            </span>
                        </div>
                        <div className="slds-media__body">
                            <h2 className="slds-card__header-title">
                                <span className="slds-card__header-link slds-truncate" title="Accounts">
                                    <span> Create New Location </span>
                                </span>
                            </h2>
                        </div>
                    </header>
                </div>
                <div className="slds-card__body slds-card__body_inner">
                    <form className="slds-form" onSubmit={e => onSubmit(e)}>
                        <div className="slds-form-element slds-form-element_horizontal">
                            <label className="slds-form-element__label" htmlFor="horizontal-input-id-01">Location Name: </label>
                            <div className="slds-form-element__control">
                                <input
                                    name="name"
                                    value={name}
                                    onChange={e => onChange(e)}
                                    required
                                    type="text"
                                    id="horizontal-input-id-01"
                                    placeholder="Penrod"
                                    className="slds-input" />
                            </div>
                        </div>

                        <div className="slds-form-element slds-form-element_horizontal">
                            <label className="slds-form-element__label" htmlFor="horizontal-input-id-02"> Description </label>
                            <div className="slds-form-element__control">
                                <input
                                    type="text"
                                    name="description"
                                    value={description}
                                    onChange={e => onChange(e)}
                                    id="horizontal-input-id-02"
                                    placeholder="A place Joseph Kotvis would love to work at!"
                                    className="slds-textarea" />
                            </div>
                        </div>

                        <div className="slds-form-element slds-form-element_horizontal">
                            <label className="slds-form-element__label" htmlFor="horizontal-input-id-03"> City </label>
                            <div className="slds-form-element__control">
                                <input
                                    type="text"
                                    name="city"
                                    value={city}
                                    onChange={e => onChange(e)}
                                    id="horizontal-input-id-03"
                                    placeholder="Milwaukee"
                                    className="slds-textarea"
                                    required />
                            </div>
                        </div>
                        <div className="slds-clearfix">
                            <div className="slds-float_right">
                                <button type="submit" className="slds-button slds-button_brand"> Create </button>
                            </div>
                        </div>
                    </form>
                </div>
            </article>
        </Fragment >
    );
};

LocationForm.propTypes = {
    setAlert: PropTypes.func.isRequired,
    createLocation: PropTypes.func.isRequired,
}

export default connect(null, { setAlert, createLocation })(LocationForm);
