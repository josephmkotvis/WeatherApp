import {
    SET_LOCATION,
    REMOVE_LOCATION 
} from '../actions/types';

const initialState= {
    locations: [],
    loading: true,
    selected: null
};

export default function(state = initialState, action){

    const {type, payload} = action;

    switch(type){
        case SET_LOCATION:
            return {
                ...state,
                locations: [...state.locations, payload],
                loading:false
            };
        case REMOVE_LOCATION:
            return state.filter(location => location.id !== payload);
        default:
            return state;
    }
}