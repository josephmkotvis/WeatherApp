import {
   LOAD_WEATHER,
   LOAD_WEATHER_FAILED
} from '../actions/types';

const initialState= {
    weather: [],
    loading: true
};

export default function(state = initialState, action){

    const {type, payload} = action;

    switch(type){
       case LOAD_WEATHER:
        return {
            ...state,
            weather: [...state.weather, payload],
            loading:false
        };
        case LOAD_WEATHER_FAILED:
            return {
                ...state,
                loading: false
            }
        default:
            return state;
    }
}