import {
    WEATHER_LOADED,
    WEATHER_FAILED
} from '../actions/types';

const initialState = {
    currentWeather: {},
    forecast: {}
};

export default function (state = initialState, action) {

    const { type, payload } = action;

    switch (type) {
        case WEATHER_LOADED:
            console.log({
                ...state,
                currentWeather: payload.currentWeather,
                forecast: payload.forecast
            })
            return {
                ...state,
                currentWeather: payload.currentWeather,
                forecast: payload.forecast
            }
        case WEATHER_FAILED:
            return {
                ...state,
                ...initialState
            }
        default:
            return state;
    }
}