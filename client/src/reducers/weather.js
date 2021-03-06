import {
    WEATHER_LOADED,
    WEATHER_FAILED
} from '../actions/types';

const initialState = {

};

export default function (state = initialState, action) {

    const { type, payload } = action;

    switch (type) {
        case WEATHER_LOADED:
            return {
                ...state,
                [payload.city]: payload.weather
            }
        case WEATHER_FAILED:
            return {
                ...state
            }
        default:
            return state;
    }
}