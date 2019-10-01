import axios from 'axios';
import { setAlert } from './alert';
import { selectLocation } from './location';
import {
   WEATHER_LOADED,
   WEATHER_FAILED
} from './types';
import {weatherAPIKEY} from '../config/keys';


export const loadWeather = (location) => async dispatch => {
    try {
        dispatch(selectLocation(location._id));
        let url = "http://api.openweathermap.org/data/2.5/weather?q=" +  location.city + "&units=imperial&APPID=" + weatherAPIKEY;
        const res = await axios.get(url);
        dispatch({
            type: WEATHER_LOADED,
            payload:  res.data
        })
    } catch (err) {
        dispatch(setAlert('Weather did not load successfully', 'error', 'error'))
        dispatch({
            type: WEATHER_FAILED
        })
    }
}
