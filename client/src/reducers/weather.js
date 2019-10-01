import {
    WEATHER_LOADED,
    WEATHER_FAILED
} from '../actions/types';

const initialState = {};

export default function (state = initialState, action) {

    const { type, payload } = action;

    switch (type) {
        case WEATHER_LOADED:
            return {
                ...state,
                ...payload,
                loading: false
            };
        case WEATHER_FAILED:
            return {
                ...state,
                ...initialState,
                loading: false
            }
        default:
            return state;
    }
}