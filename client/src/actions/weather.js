import axios from 'axios';
import { setAlert } from './alert';
import { selectLocation } from './location';
import {
   WEATHER_LOADED,
   WEATHER_FAILED
} from './types';
import {weatherAPIKEY} from '../config/keys';
import _ from 'lodash';
import moment from 'moment';


export const loadWeather = (location) => async dispatch => {
    try {
        dispatch(selectLocation(location._id));
        
        const currentUrl = "http://api.openweathermap.org/data/2.5/weather?APPID=" + weatherAPIKEY + "&units=imperial&q=" + location.city + "";

        const forcastUrl = "http://api.openweathermap.org/data/2.5/forecast?APPID=" + weatherAPIKEY + "&units=imperial&q=" + location.city + "";
        
        const currentRes = await axios.get(currentUrl);
        console.log(currentRes);

        const forecastRes = await axios.get(forcastUrl);

        console.log(forecastRes);

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
            type: WEATHER_LOADED,
            payload: {
                currentWeather: {
                    time: returnFixedDate(currentRes.data.dt, timeZoneDiff),
                    temp: currentRes.data.main.temp,
                    humidity: currentRes.data.main.humidity,
                    weather: currentRes.data.weather,
                    wind: currentRes.data.wind
                },
                forecast: groupedWeatherSlots
            } 
        })
    } catch (err) {
        dispatch(setAlert('Weather did not load successfully', 'error', 'error'))
        dispatch({
            type: WEATHER_FAILED
        })
    }
}

function returnFixedDate (date , timeZoneDiff) {
    const epochDate = new Date(1970, 0, 1); 
        epochDate.setSeconds(date - timeZoneDiff);
    return epochDate;
}