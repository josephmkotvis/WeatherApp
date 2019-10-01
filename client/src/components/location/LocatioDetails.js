import React, {Fragment, useState} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';



const LocationDetails = ( {} ) => {
    // const [formData, setFormData] = useState(
    //     {
    //         name: '',
    //         email: '',
    //         password: '',
    //         password2: ''
    //     }
    // );



    return (
        <div>
            
        </div>
    ); 
};

Register.propTypes = {
    location: state.location.selected
}

const mapStateToProps = state => ({
    alerts: state.alert
});

export default connect(mapStateToProps, { })(LocationDetails);
