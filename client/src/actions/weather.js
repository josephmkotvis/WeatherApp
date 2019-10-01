import axios from 'axios';
import { setAlert } from './alert';
import {
   LOAD_WEATHER,
} from './types';
import {weatherAPIKEY} from '../config/keys';

export const loadWeather = (location) => async dispatch => {
    try {
        let url = "http://api.openweathermap.org/data/2.5/weather?q=" +  location.city + "&units=metric&APPID=" + weatherAPIKEY;

        const res = await axios.get(url);
        dispatch({
            type: LOAD_WEATHER,
            payload: res.data
        })     
    } catch (err) {
        dispatch(setAlert('Weather did not load successfully', 'error', 'error'))
    }
}