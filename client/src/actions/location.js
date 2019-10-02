import axios from 'axios';
import { setAlert } from './alert';
import {
    SET_LOCATION,
    REMOVE_LOCATION,
    SELECT_LOCATION,
    ADD_LOCATION,
    STOP_ADDING_LOCATION
} from './types';
import { loadWeather } from './weather';


export const addLocation = () => dispatch => {
    dispatch({
        type: ADD_LOCATION
        });
}

export const stopAddingLocation = () => dispatch => {
    dispatch({
        type: STOP_ADDING_LOCATION
    });
}

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
            dispatch(loadWeather(location));
            dispatch(setLocation(location));
        })
            
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
    dispatch(stopAddingLocation());
}
