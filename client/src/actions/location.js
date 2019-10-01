import axios from 'axios';
import { setAlert } from './alert';
import {
    SET_LOCATION,
    REMOVE_LOCATION,
    SELECT_LOCATION
} from './types';

export const setLocation = (location) => dispatch => {
    dispatch({
        type: SET_LOCATION,
        payload: location
    });
}

export const removeLocation = (id) => dispatch => {
    dispatch({
        type: REMOVE_LOCATION,
        payload: { id }
    });
}

export const loadLocations = () => async dispatch => {
    try {
        const res = await axios.get('/api/locations');
        res.data.forEach(location => {
            dispatch(setLocation(location))
        }

        )
    } catch (err) {
        const errors = err.response.data.errors;
        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'error', 'error')));
        }
    }
}

export const selectLocation = (id) => dispatch => {
    dispatch({
        type: SELECT_LOCATION,
        payload: id
    });
}
