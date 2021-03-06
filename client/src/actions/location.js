import axios from 'axios';
import { setAlert } from './alert';
import {
    SET_LOCATION,
    REMOVE_LOCATION,
    SELECT_LOCATION,
    ADD_LOCATION,
    STOP_ADDING_LOCATION,
    WEATHER_LOADED
} from './types';
import { loadWeather } from './weather';
import { loadForecast } from './forecast';
import { weatherAPIKEY } from '../utils/keys';
import { returnFixedDate } from '../utils/utils';


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

export const selectLocation = (location) => dispatch => {
    dispatch({
        type: SELECT_LOCATION,
        payload: location._id
    });
    dispatch(loadForecast(location));
    dispatch(stopAddingLocation());
}



export const createLocation = ({ name, description, city }) => async (dispatch, getState) => {
    try {
        const cachedWeather = getState().weather[city];

        if (!cachedWeather) {
            try {
                const currentUrl = "http://api.openweathermap.org/data/2.5/weather?APPID=" + weatherAPIKEY + "&units=imperial&q=" + city + "";
                const currentRes = await axios.get(currentUrl);
                if (currentRes) {
                    const res = await axios.post('/api/locations', { name, description, city });
                    const { main, timezone, dt, weather, wind } = currentRes.data;
                    dispatch({
                        type: WEATHER_LOADED,
                        payload: {
                            city: city,
                            weather: {
                                time: returnFixedDate(dt, timezone),
                                temp: main.temp,
                                humidity: main.humidity,
                                weather: weather,
                                wind: wind
                            }
                        }
                    });
                    dispatch(setLocation(res.data));
                    dispatch(selectLocation(res.data));
                }
            } catch (err) {
                dispatch(setAlert('Incorrect City Value', 'error', 'error'));
            }
        }
        else {
            const res = await axios.post('/api/locations', { name, description, city });
            dispatch(setLocation(res.data));
            dispatch(selectLocation(res.data));
        }


    } catch (err) {
        const errors = err.response.data.errors;
        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'error', 'error')));
        }
    }
}
