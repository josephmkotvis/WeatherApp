import {
    SET_LOCATION,
    REMOVE_LOCATION,
    SELECT_LOCATION,
    ADD_LOCATION,
    STOP_ADDING_LOCATION
} from '../actions/types';

const initialState = {
    locations: [],
    loading: true,
    selected: {
        _id: null,
        name: '',
        description: '',
        city: '',
        cityId: 0
    },
    isAddingLocation: false
};

export default function (state = initialState, action) {

    const { type, payload } = action;

    switch (type) {
        case SET_LOCATION:
            return {
                ...state,
                locations: [...state.locations, payload],
                loading: false
            };
        case REMOVE_LOCATION:
            return {
                ...state,
                locations: state.locations.filter(location => location.id !== payload)
            }
        case SELECT_LOCATION:
            return {
                ...state,
                selected: state.locations.find(location => location._id === payload)
            }
        case ADD_LOCATION:
            return {
                ...state,
                selected: initialState.selected,
                isAddingLocation: true
            }
        case STOP_ADDING_LOCATION:
            return {
                ...state,
                isAddingLocation: false
            }
        default:
            return state;
    }
}