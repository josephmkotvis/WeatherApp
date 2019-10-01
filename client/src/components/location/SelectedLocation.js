import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';



const SelectedLocation = ( {location} ) => {
    // const [formData, setFormData] = useState(
    //     {
    //         name: '',
    //         email: '',
    //         password: '',
    //         password2: ''
    //     }
    // );



    return (
        <div onClick= {() => console.log(location)}>
            {location.name}
        </div>
    ); 
};


SelectedLocation.propTypes = {
    location: PropTypes.object
}

const mapStateToProps = state => ({
    location: state.location.selected
});

export default connect(mapStateToProps)(SelectedLocation);
