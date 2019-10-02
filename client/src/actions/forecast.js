import axios from 'axios';
import { setAlert } from './alert';
import { selectLocation } from './location';
import {
    FORECAST_LOADED,
    WEATHER_FAILED
} from './types';
import { weatherAPIKEY } from '../utils/keys';
import _ from 'lodash';
import moment from 'moment';
import { returnFixedDate } from '../utils/utils'

export const loadForecast = (location) => async (dispatch, getState) => {
    try {
        dispatch(selectLocation(location._id));

        let cachedForcasts = getState().forecast[location.city]
        if (!cachedForcasts) {

            const forecastUrl = "http://api.openweathermap.org/data/2.5/forecast?APPID=" + weatherAPIKEY + "&units=imperial&q=" + location.city + "";

            const forecastRes = await axios.get(forecastUrl);

            const timeZoneDiff = forecastRes.data.city.timezone;
            const weatherSlots = [];

            forecastRes.data.list.forEach(weatherSlot => {
                const finalWeatherSlot = {
                    time: returnFixedDate(weatherSlot.dt, timeZoneDiff),
                    temp: weatherSlot.main.temp,
                    humidity: weatherSlot.main.humidity,
                    weather: weatherSlot.weather,
                    wind: weatherSlot.wind
                }
                weatherSlots.push(finalWeatherSlot);
            });

            let groupedWeatherSlots = _.groupBy(weatherSlots, function (weatherSlot) {
                return moment(weatherSlot.time).startOf('day').format('ddd MMM-DD-YYYY');
            });


            dispatch({
                type: FORECAST_LOADED,
                payload: {
                    city: location.city,
                    forecast: groupedWeatherSlots
                }
            })
        } else {
            dispatch({
                type: FORECAST_LOADED,
                payload: {
                    city: location.city,
                    forecast: cachedForcasts
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

