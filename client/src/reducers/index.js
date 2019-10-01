import {combineReducers} from 'redux';
import alert from './alert';
import location from './location';


export default combineReducers({
    alert,
    location
});