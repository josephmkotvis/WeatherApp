import {
    FORECAST_LOADED,
} from '../actions/types';

const initialState = {

};

export default function (state = initialState, action) {

    const { type, payload } = action;

    switch (type) {
        case FORECAST_LOADED:
            return {
                ...state,
                [payload.city]: payload.forecast 
            }
        default:
            return state;
    }
}