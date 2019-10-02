import axios from 'axios';
import { setAlert } from './alert';
import {
    WEATHER_LOADED,
    WEATHER_FAILED
} from './types';
import { weatherAPIKEY } from '../utils/keys';
import { returnFixedDate } from '../utils/utils'

export const loadWeather = (location) => async (dispatch, getState) => {
    try {
        const cachedWeather = getState().weather[location.city];
        if (!cachedWeather) {
            const currentUrl = "http://api.openweathermap.org/data/2.5/weather?APPID=" + weatherAPIKEY + "&units=imperial&q=" + location.city + "";
            const currentRes = await axios.get(currentUrl);

            const { main, timezone, dt, weather, wind } = currentRes.data;

            dispatch({
                type: WEATHER_LOADED,
                payload: {
                    city: location.city,
                    weather: {
                        time: returnFixedDate(dt, timezone),
                        temp: main.temp,
                        humidity: main.humidity,
                        weather: weather,
                        wind: wind
                    }
                }
            })
        } else {
            dispatch({
                type: WEATHER_LOADED,
                payload: {
                    city: location.city,
                    weather: cachedWeather
                }
            })
        }

    } catch (err) {
        dispatch(setAlert('Weather did not load successfully', 'error', 'error'))
        dispatch({
            type: WEATHER_FAILED
        })
    }
}

