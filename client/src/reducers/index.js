import { combineReducers } from 'redux';
import alert from './alert';
import location from './location';
import weather from './weather';


export default combineReducers({
    alert,
    location,
    weather
});